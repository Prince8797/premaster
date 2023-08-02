import dotenv from 'dotenv';
import express from 'express';
// import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import _ from 'lodash';
import session from 'express-session';
import passport from 'passport';
// import passportLocalMongoose from "passport-local-mongoose";
import cors from 'cors';

// components
import Connection from './database/db.js';
import studyMaterialRouter from './routes/studyMaterial-route.js';
import seedRouter from './routes/seed-route.js';
import userRouter from './routes/user-route.js';
import userPostRouter from './routes/userPost-route.js';
// import defaultData from './defaultData.js';
// import StudyMaterialData from './constants/StudyMaterial.js';


const __dirname = path.resolve();
const app = express();



// app.use(express.static(public))
app.use(cors());   // this will help in connecting port 80 and port 3000 (backend and frontend port)
app.use(bodyParser.json({ extended: true }));  //bodyparser will parse the json file
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
});
app.use(session({
    secret: "this is my little secret",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/studyMaterials', studyMaterialRouter);
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/userPost', userPostRouter);


// -----------------------CONNECTING MONGODB---------------------------------//

dotenv.config();       // calling dotenv file.
const USERNAME = process.env.DB_USERNAME;   // accessing data from .env file
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);    // passed username and password of .env file to Connection of db.js


app.use(express.static(path.join(__dirname, '/my-app/build')));
// app.get('*', (req, res) => {      // it was giving ENOENT error:No such directory found.
//     res.sendFile(path.join(__dirname, '/my-app/build/index.html'))
// });


// --------------------------------USER SCHEMA-------------------------------//

// pasted the code in user-schema.js --- contains preMasterUser

// ----------------------------MAIN DATA API SCHEMA-----------------------------//

// pasted this code in studyMaterial-schema.js --- constains preMasterApi

// completed

// ------------------------------GETTING USER API------------------------------//


// app.get("/premaster/prince_mathur/users/api", (req, res) => {
//     PreMasterUser.find((err, foundData) => {
//         if (!err) {
//             res.json(foundData);
//         } else {
//             res.send(err);
//         }
//     })
// })

// app.get("/user/:findUser", (req, res) => {
//     PreMasterUser.find({ username: req.params.username }, (err, foundData) => {
//         if (req.isAuthenticated()) {
//             res.send(foundData);
//         }
//         else {
//             res.send(false);
//         }
//     })
// })

// // ---------------------------GETTING MAIN DATA API-----------------------------//


// app.get("/premaster/prince_mathur/maindata/api", (req, res) => {
//     PreMasterApi.find((err, foundData) => {
//         if (!err) {
//             res.json(foundData);
//         } else {
//             res.send(err);
//         }
//     })
// })

// app.get("/premaster/prince_mathur/maindata/api/:id", (req, res) => {
//     PreMasterApi.findById(req.params.id, (err, foundData) => {
//         if (!err) {
//             res.json(foundData);
//         } else {
//             res.send(err);
//         }
//     })
// })




// // app.get("/secret")

// // app.get('/logout', function (req, res, next) {
// //     req.logout(function (err) {
// //         if (err) { return next(err); }
// //         res.redirect('/');
// //     });
// // });


// // ---------------------------SIGNUP POST FROM USER---------------------------//


// app.post("/premaster/prince_mathur/api", (req, res) => {
//     const newPreMasterUser = new PreMasterUser({
//         fname: req.body.fname,
//         username: req.body.username
//     })
//     PreMasterUser.register(newPreMasterUser, req.body.password, function (err, user) {
//         if (err) {
//             console.log(err);
//             console.log("Something went wrong!!!!!!!!!");
//             res.redirect('/presentOrNot');
//         }
//         else {
//             passport.authenticate("local")(req, res, function () {
//                 console.log("Your Account has been Created !!!!!!")
//                 res.redirect("/user/:findUser");
//             })
//         }
//     })
// })


// // ---------------------------LOGIN POST FROM USER---------------------------//


// app.post("/premaster/prince_mathur/login", (req, res) => {
//     const amIUserOrNot = new PreMasterUser({
//         username: req.body.username,
//         password: req.body.password
//     });
//     req.login(amIUserOrNot, function (err) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             passport.authenticate("local")(req, res, function () {
//                 console.log("You are Loged in");
//                 res.redirect("/user/:findUser");
//             })
//         }
//     })
// })


// ---------------------------LISTENING ON PORT 80 ---------------------------//

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})

// defaultData(); // calling after making of port server