//importing student model
const Student = require('../models/student');

//student login function
const student_login_get = (req, res) => {
       res.render("student/login", { message:" "});
    };

const student_login_post = async (req, res) => {

        const Sturoll = req.body.roll_no; 
        const Studob = req.body.date_of_birth;  
        const individualStudent = await Student.findOne({
          where : { roll_no : Sturoll, date_of_birth : Studob }});    
        if(!individualStudent){
          res.render("student/login", {
            message : "Login with correct roll number and date of birth"
          })
        }      
        res.render("student/view", { one : individualStudent , message: "Student LogedIn Successfully."});
    };

//exporting student controller functions
module.exports={
    student_login_get,
    student_login_post
}