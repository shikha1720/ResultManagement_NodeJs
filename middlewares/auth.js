const { getUser } = require("../services/auth")

const redirectToLoggedinUserOnly = async (req, res, next) => {
    const userUid = await req.cookies?.uid;

    if (!userUid) return res.render("teacher/teacherLogin",{message:" "});

    const user = getUser(userUid);

    if(!user) return res.render("teacher/teacherLogin",{message:" "});

    req.user = user;
    next();
}

module.exports = {
    redirectToLoggedinUserOnly
}