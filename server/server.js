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
// ---------------------------LISTENING ON PORT 80 ---------------------------//

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})

// defaultData(); // calling after making of port server