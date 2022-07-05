import React, { useState } from "react";
import axios from "axios";
import './Form.css';
import {
    Link,
} from "react-router-dom";
export default function Form(props) {

    const [user, setUser] = useState({
        username: "", email: "", password: ""
    });

    const handleChange = async (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUser({ ...user, [name]: value })
    }

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            username: user.username,
            email: user.email,
            password: user.password
        }

        axios({
            url: "/premaster/prince_mathur/api",
            method: "POST",
            data: payload
        })
            .then(() => {
                console.log("Data has been sent to the server");
            })
        setUser({
            username: "", email: "", password: ""
        });
    }


    return (
        <form onSubmit={handleSignUpSubmit}>
            <div className="form-container">
                <div className="register-form">
                    <div className="form-logo">
                        <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="" />
                    </div>
                    <div>
                        <h3>PreMaster</h3>
                    </div>
                    <div className="option">
                        <div><hr /></div>
                        <div className="option-font">OR {props.callback ? "Login" : "SignUp"} with Email</div>
                        <div><hr /></div>
                    </div>
                    {!props.callback && <div className="user"><label htmlFor="username">Username</label>
                        <input className="input"
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                        /></div>}
                    <div className="user">
                        <label htmlFor="email">Email Address</label>
                        <input className="input"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="user">
                        <label htmlFor="password">Password</label>
                        <input className="input"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="btn-box">
                        <button className="user-btn input">
                            {props.callback ? "Login" : "Create Account"}
                        </button>
                    </div>
                    <div className="option">
                        <div>OR <Link to={!props.callback ? "/Login" : "/SignUp"}>{!props.callback ? "Login" : "SignUp"}</Link></div>
                    </div>
                </div>
            </div>
        </form>
    )
}