const Project = require('../Projects/ProjectsSchema');

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).send({ message: 'Project created successfully', project });
    } catch (error) {
        res.status(500).send({ message: 'Error creating project', error });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching projects', error });
    }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send({ message: 'Project not found' });
        }
        res.status(200).send(project);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching project', error });
    }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!project) {
            return res.status(404).send({ message: 'Project not found' });
        }
        res.status(200).send({ message: 'Project updated successfully', project });
    } catch (error) {
        res.status(500).send({ message: 'Error updating project', error });
    }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).send({ message: 'Project not found' });
        }
        res.status(200).send({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting project', error });
    }
};
