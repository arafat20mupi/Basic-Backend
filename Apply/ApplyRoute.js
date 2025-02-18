const express = require('express');
const { createApplyUser, getAllApply, sendMail, } = require('./ApplyController');
const upload = require('../Middileware/multer');
const cloudinaryUploadMiddleware = require('../Middileware/FileUpload');

const router = express.Router();

router.post('/apply', createApplyUser);
router.get('/', getAllApply);
router.post('/send-mail', upload.single("file"),cloudinaryUploadMiddleware('uploads'), sendMail);

module.exports = router;
