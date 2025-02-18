const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

const cloudinaryUploadMiddleware = (folder) => (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folder || 'uploads', resource_type: 'auto' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload failed:', error);
          return res.status(500).json({ error: 'File upload to Cloudinary failed' });
        }

        req.fileUrl = result.secure_url; 
        next(); 
      }
    );

   
    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = cloudinaryUploadMiddleware;