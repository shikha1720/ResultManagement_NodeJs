
# Result Managment Application

The "Result Managment Application" is a node js application in which students result is added, updated and deleted by the teacher and result is seen by the student. This application is developed using HTML, CSS, Node Js and has following:

* Two types of users can login to application by clicking a button on homepage
* Students can enter their roll number and date of birth to view their result
* If roll number and D.O.B. does not match, an error should be shown on screen.
* Teachers can View all records, add new record, edit and delete the records.


## Setup Guide

### Backend 
* Open the project in Visual Studio Code.
* Go to toolbar --> terminal --> Open new terminal.
* Run this command in the terminal to install the dependencies.
```bash
    npm install
```

### Database 
* Create a database named "result_management_db" in MySQL Workbench or run the SQL command.
```bash
    CREATE DATABASE result_management_db;
```
* After creating the database run this command in terminal.
 ```bash
    npm install sequelize-cli -g
```
* Run this command in the terminal for migration.
 ```bash
    sequelize-cli db:migrate
```

  
### Start Application
* To start the application run following command in the terminal.
 ```bash
    npm start
```
OR
  ```bash
    node app.js
```
  
### Frontend
* Open URL "http://localhost:5000" on a browser to access this application.

### Credentials
* Teacher login details:-
 ```bash
    Email: teacher@email.com
    Password: Teacher@12345
```

## Screenshots

### Home Page
[![Screenshot-49.png](https://i.postimg.cc/0NgpSZ7V/Screenshot-49.png)](https://postimg.cc/K1NkSPqT)

### Teacher Login
[![Teacher-Login.png](https://i.postimg.cc/brjnDvbd/Teacher-Login.png)](https://postimg.cc/sQwxbsTR)

### Teacher Dashboard
[![Teacher-Options.png](https://i.postimg.cc/J01nCHZ3/Teacher-Options.png)](https://postimg.cc/R6D9cFPq)

### All Students Result
[![All-Student.png](https://i.postimg.cc/MK6DdsMH/All-Student.png)](https://postimg.cc/gr780HKb)

### Add New Student Result
[![Add-Student.png](https://i.postimg.cc/htxfxnDd/Add-Student.png)](https://postimg.cc/tsqqQLVq)

### Update Existing Student Result
[![Edit-Student.png](https://i.postimg.cc/Hs1xgK4W/Edit-Student.png)](https://postimg.cc/mhVR3m5K)

### Student Login
[![Student-Login.png](https://i.postimg.cc/Zqd24fLZ/Student-Login.png)](https://postimg.cc/FfhDxVqn)

### Student Result View
[![Student-Result.png](https://i.postimg.cc/pX3BRPch/Student-Result.png)](https://postimg.cc/SJ79Gbhk)

