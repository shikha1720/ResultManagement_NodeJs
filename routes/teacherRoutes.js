var express = require('express');
const router = express.Router();
const {redirectToLoggedinUserOnly} = require('../middlewares/auth');
const teacherController = require('../controllers/teacherController');

//routes for teacher
router.get('/login',teacherController.teacher_login_get);
router.post('/login',teacherController.teacher_login_post);
router.get('/viewAll',redirectToLoggedinUserOnly,teacherController.teacher_viewall_get);
router.get('/edit/:roll_no',redirectToLoggedinUserOnly,teacherController.teacher_edit_get);
router.post('/edit/:roll_no',redirectToLoggedinUserOnly,teacherController.teacher_edit_post);
router.get('/delete/:roll_no',redirectToLoggedinUserOnly,teacherController.teacher_delete_get);
router.get('/options',redirectToLoggedinUserOnly,teacherController.teacher_option_get);
router.post('/add',redirectToLoggedinUserOnly,teacherController.teacher_add_post);
router.get('/add',redirectToLoggedinUserOnly,teacherController.teacher_add_get); 

module.exports = router;