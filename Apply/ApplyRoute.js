const express = require('express');
const router = express.Router();
const { createApplyUser, getAllUser } = require('./ApplyController');  


router.post('/apply', createApplyUser); 

router.get('/' , getAllUser)

module.exports = router;
