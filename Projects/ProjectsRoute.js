const express = require('express');
const { createProject, getAllProjects, getProjectById, updateProject, deleteProject } = require('./ProjectsController');
const router = express.Router();

// Route to create a new project
router.post('/projects', createProject);

// Route to get all projects
router.get('/projects', getAllProjects);

// Route to get a single project by ID
router.get('/projects/:id', getProjectById);

// Route to update a project by ID
router.put('/projects/:id', updateProject);

// Route to delete a project by ID
router.delete('/projects/:id', deleteProject);

module.exports = router;
