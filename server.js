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

app.use(session({
    secret: "this is my little secret",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 80;

mongoose.connect("mongodb+srv://Prince-Mathur:Prince8797@cluster0.wfwvm.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connected");
}).catch((error) => {
    console.log(error);
});

const proMasterUserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

proMasterUserSchema.plugin(passportLocalMongoose);

const ProMasterUser = new mongoose.model("ProMasterUser", proMasterUserSchema);

passport.use(ProMasterUser.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(ProMasterUser.serializeUser());
passport.deserializeUser(ProMasterUser.deserializeUser());

app.get("/promaster/prince_mathur/api", (req, res) => {
    ProMasterUser.find((err, foundData) => {
        if (!err) {
            res.send(foundData);
        } else {
            res.send(err);
        }
    })
})

// app.get("/secret")

// app.get('/logout', function (req, res, next) {
//     req.logout(function (err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//     });
// });

app.post("/promaster/prince_mathur/api", (req, res) => {
    const newProMasterUser = new ProMasterUser({
        username: req.body.username,
        email: req.body.email
    })
    ProMasterUser.register(newProMasterUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            console.log("Something went wrong!!!!!!!!!");
            // res.redirect("/signup");
        }
        else {
            passport.authenticate("local")(req, res, function () {
                // res.redirect("/secret");
                console.log("Your Account has been Created !!!!!!")
            })
        }
    })
})

app.post("/promaster/prince_mathur/api/login", (req, res) => {
    const amIUserOrNot = new ProMasterUser({
        username: "",
        email: req.body.email,
        password: req.body.password
    });
    req.login(amIUserOrNot, function (err) {
        if (err) {
            console.log(err);
            // res.redirect("/signup");
        }
        else {
            passport.authenticate("local")(req, res, function () {
                // res.redirect("/secret");
                console.log("You are Loged in")
            })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})
