const express = require('express');
const app = express();
const sequelize = require("./database/connection");
const fs = require('fs');
const cookie = require('cookie-parser');

//port
const port = 5000;

//Database Connection
require("./database/connection");

//register view engine
app.set('view engine', 'ejs');

//Seeding
const seedQuery = fs.readFileSync("./seeders/seed.sql", {
    encoding: "utf-8"
});
(async () => {
    try {
        await sequelize.query(seedQuery)
    }
    catch (error) {
        if (error) {
            console.log(`User already exists. Skipping...`);
        } else {
            console.error(`Error seeding user :`, error);
        }
    }
})();

//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookie());

//static files
app.use(express.static('public'));

//layout
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

//teacher and student routes
const teachRoutes = require("./routes/teacherRoutes")
app.use("/teacher", teachRoutes);
const studRoutes = require("./routes/studentRoutes")
app.use("/student", studRoutes);

//routes
app.get("/", (req, res) => {
    res.render('index');
});
app.get('/logout', (req, res) => {
    // Clear the cookie by setting an empty value and an expired date
    res.clearCookie('uid');
    res.redirect('/');
  });
app.listen(port, function (err) {
    if (err) {
        console.log("Error while running Result Management App at port: ", port);
        console.log(err);
        return;
    }
    console.log(`Result Management App listening at http://localhost:${port}`);
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
