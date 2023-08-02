import './Blog.css';
import { useState } from 'react';
import axios from 'axios';

// components
// import { authenticatePost } from '../../service/api';

const postInitialValue = {
    AuthorName: "",
    composeData: ""
}

export default function Blog() {

    const [post, setPost] = useState(postInitialValue);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
        console.log(post);
    }

    const handlePost = async () => {
        // event.preventDefault();

        const payload = {
            AuthorName: post.AuthorName,
            composeData: post.composeData
        }

        // sending request to routes.js in server for signup user.
        axios({
            url: "/posts",
            method: "POST",
            data: payload
        }).then(() => {
            console.log("Author's Post has been sent to the server");
        })

        setPost({
            AuthorName: "", composeData: ""
        });
    }

    return (
        <form onSubmit={handlePost}>
            <div className="blog-first">
                <div className="blogContainer">
                    <label>Name:</label>
                    <input className="input" type="text" name="AuthorName"
                        onChange={(e) => { handleChange(e) }} value={post.AuthorName} />
                    <label>Compose:</label>
                    <textarea name="composeData" cols="10" rows="7"
                        onChange={(e) => { handleChange(e) }} value={post.composeData}
                    />
                    <button>Post</button>
                </div>
            </div>
        </form>
    )
}