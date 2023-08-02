import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    AuthorName: {
        type: String,
        required: true,
        trim: true
    },
    composeData: {
        type: String,
        required: true
    }
});

const post = mongoose.model('post', postSchema);

export default post;