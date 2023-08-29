var express = require("express");
const router = express.Router();
const studentController = require('../controllers/studentController');

//routes for student
router.get('/login',studentController.student_login_get);
router.post('/login',studentController.student_login_post);

module.exports = router;