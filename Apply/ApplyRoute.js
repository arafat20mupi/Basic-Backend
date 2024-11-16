const express = require('express');
const router = express.Router();
const { createApplyUser, getAllUser } = require('./ApplyController');  // Corrected import
const multer = require('multer');

// File storage configuration using Multer
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// POST route to handle form submission (including file upload)
router.post('/apply', upload.single('file'), createApplyUser); // "file" is the key sent from frontend

router.get('/' , getAllUser)

module.exports = router;
