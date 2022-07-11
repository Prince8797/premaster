require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const _ = require("lodash");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


const app = express();
// app.use(express.static(public))
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


// -----------------------CONNECTING MONGODB---------------------------------//


const PORT = process.env.PORT || 80;

mongoose.connect("mongodb+srv://Prince-Mathur:Prince8797@cluster0.wfwvm.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connected");
}).catch((error) => {
    console.log(error);
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('my-app/build'));
}


// --------------------------------USER SCHEMA-------------------------------//


const preMasterUserSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

preMasterUserSchema.plugin(passportLocalMongoose);

const PreMasterUser = new mongoose.model("PreMasterUser", preMasterUserSchema);

passport.use(PreMasterUser.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(PreMasterUser.serializeUser());
passport.deserializeUser(PreMasterUser.deserializeUser());


// ----------------------------MAIN DATA API SCHEMA-----------------------------//

const preMasterApiSchema = new mongoose.Schema({
    id: Number,
    subjectName: String,
    subjectDiscription: String,
    chapterNo: {
        chapterName: String,
        TopicNo: {
            name: String,
            Content: String
        }
    }
})

const PreMasterApi = new mongoose.model("PreMasterApi", preMasterApiSchema);


// ------------------------------GETTING USER API------------------------------//


app.get("/premaster/prince_mathur/users/api", (req, res) => {
    PreMasterUser.find((err, foundData) => {
        if (!err) {
            res.json(foundData);
        } else {
            res.send(err);
        }
    })
})

app.get("/user/:findUser", (req, res) => {
    PreMasterUser.findOne({ username: req.params.findUser }, (err, foundData) => {
        if (!err) {
            res.json(foundData);
        } else {
            res.send(err);
        }
    })
})

// ---------------------------GETTING MAIN DATA API-----------------------------//


app.get("/premaster/prince_mathur/maindata/api", (req, res) => {
    PreMasterApi.find((err, foundData) => {
        if (!err) {
            res.json(foundData);
        } else {
            res.send(err);
        }
    })
})

app.get("/premaster/prince_mathur/maindata/api/:id", (req, res) => {
    PreMasterApi.findById(req.params.id, (err, foundData) => {
        if (!err) {
            res.json(foundData);
        } else {
            res.send(err);
        }
    })
})


app.get("/presentOrNot", (req, res) => {
    if (req.isAuthenticated()) {
        res.send(true);
    }
    else {
        res.send(false);
    }
})

// app.get("/secret")

// app.get('/logout', function (req, res, next) {
//     req.logout(function (err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//     });
// });


// ---------------------------SIGNUP POST FROM USER---------------------------//


app.post("/premaster/prince_mathur/api", (req, res) => {
    const newPreMasterUser = new PreMasterUser({
        fname: req.body.fname,
        username: req.body.username
    })
    PreMasterUser.register(newPreMasterUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            console.log("Something went wrong!!!!!!!!!");
            res.redirect('/presentOrNot');
        }
        else {
            passport.authenticate("local")(req, res, function () {
                console.log("Your Account has been Created !!!!!!")
                res.redirect('/presentOrNot');
            })
        }
    })
})


// ---------------------------LOGIN POST FROM USER---------------------------//


app.post("/premaster/prince_mathur/login", (req, res) => {
    const amIUserOrNot = new PreMasterUser({
        username: req.body.username,
        password: req.body.password
    });
    req.login(amIUserOrNot, function (err) {
        if (err) {
            console.log(err);
            res.redirect('/presentOrNot');
        }
        else {
            passport.authenticate("local")(req, res, function () {
                console.log("You are Loged in");
                res.redirect('/presentOrNot');
            })
        }
    })
})


// ---------------------------LISTENING ON PORT 80 ---------------------------//


app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})

