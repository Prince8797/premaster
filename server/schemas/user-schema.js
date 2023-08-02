import mongoose from "mongoose";
import passport from 'passport';
import passportLocalMongoose from "passport-local-mongoose";

const preMasterUserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true,
            unique: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,

        },
        password: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
)

// preMasterUserSchema.plugin(passportLocalMongoose);

const PreMasterUser = new mongoose.model("PreMasterUser", preMasterUserSchema);

// passport.use(PreMasterUser.createStrategy());

// // use static serialize and deserialize of model for passport session support
// passport.serializeUser(PreMasterUser.serializeUser());
// passport.deserializeUser(PreMasterUser.deserializeUser());

export default PreMasterUser;