import Post from "../schemas/posts-schema.js";


export const userPosts = async (request, response) => {
    try {
        const post = request.body; // request.body contains the data that was posted by the frontend
        const newPost = new Post(post);
        await newPost.save();
        response.status(200).json({ message: post });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export default userPosts;