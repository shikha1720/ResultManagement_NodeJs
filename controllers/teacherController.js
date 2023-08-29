//importing student model
const Student = require('../models/student');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');
const { setUser } = require('../services/auth');

//teacher login function
const teacher_login_get = (req, res) => {
    res.render("teacher/teacherLogin", { message: " " });
};
const teacher_login_post = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email, password } });
        if (!user) {
            res.render("teacher/teacherLogin", {
                message: "Invalid Username or Password"
            })
        }
        else {
            const sessionId = uuidv4();
            setUser(sessionId, user);
            res.cookie("uid", sessionId);
            res.render("teacher/options", { message: "Logged in Successfully." })
        }
    }
    catch (error) {
        res.render('/')
    }
};

//function for viewing information of all the students
const teacher_viewall_get = async (req, res) => {
    const allStudents = await Student.findAll()
    res.render("teacher/viewAll", { student: allStudents, message: " " })
};

//function for updating any students information
const teacher_edit_get = async (req, res) => {
    const StuRoll = req.params.roll_no
    const user = await Student.findOne({
        where: {
            roll_no: StuRoll
        }
    });
    res.render("teacher/edit", { user: user, message: " " })
};
const teacher_edit_post = async (req, res) => {
    const StuRoll = req.params.roll_no
    const user = await Student.update({
        name: req.body.name,
        date_of_birth: req.body.date_of_birth,
        score: req.body.score
    }, {
        where: {
            roll_no: StuRoll
        }
    });
    const allStudents = await Student.findAll()
    res.render("teacher/viewAll", { student: allStudents, message: "Student Updated Successfully." });
};

//function for deleting any students information
const teacher_delete_get = async (req, res) => {
    const StuRoll = req.params.roll_no
    await Student.destroy({
        where: { roll_no: StuRoll }
    });
    const allStudents = await Student.findAll()
    res.render("teacher/viewAll", {student: allStudents, message: "Student Deleted Successfully." })
};


const teacher_option_get = (req, res) => {
    res.render("teacher/options", { message: " " })
};

//function for adding any student information
const teacher_add_get = (req, res) => {
    res.render("teacher/addStudent", { message: " " });
};
const teacher_add_post = async (req, res) => {
    const singleStudent = new Student({
        roll_no: req.body.roll_no,
        name: req.body.name,
        date_of_birth: req.body.date_of_birth,
        score: req.body.score
    })
    try {
        console.log(singleStudent);
        const newStudent = await singleStudent.save();
        const allStudents = await Student.findAll()
        res.render("teacher/viewAll", { student: allStudents, message: "Student Added Successfully." });
    } catch {
        console.log(singleStudent);
        //res.send("Roll number already exist")
        const allStudents = await Student.findAll()
        res.render("teacher/addStudent", { message: "Rollnumber Already Exists." })
    }
};

//exporting teacher controller functions
module.exports = {
    teacher_login_get,
    teacher_login_post,
    teacher_viewall_get,
    teacher_edit_get,
    teacher_edit_post,
    teacher_delete_get,
    teacher_add_post,
    teacher_add_get,
    teacher_option_get
}