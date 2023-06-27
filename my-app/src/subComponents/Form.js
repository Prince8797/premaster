import React, { useState } from "react";
import axios from "axios";
import './Form.css';
import {
    Link,
    useNavigate
} from "react-router-dom";
export default function Form(props) {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        fname: "", username: "", password: ""
    });

    const handleChange = async (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUser({ ...user, [name]: value })
    }

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            fname: user.fname,
            username: user.username,
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
        axios.get("/registered")
            .then(response => {
                console.log(response.data);
                if (response.data === true)
                    navigate(`/${user.username}`);
            })
            .catch(error => {
                console.log(error);
            })
        setUser({
            fname: "", username: "", password: ""
        });
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            username: user.username,
            password: user.password
        }

        axios({
            url: "/premaster/prince_mathur/login",
            withCredentials: true,
            method: "POST",
            data: loginData
        })
            .then((response) => {
                console.log(response.data);
                if (response.data !== false)
                    navigate(`/user/${user.username}`, { state: { username: user.username } });
            })
            .catch(error => {
                console.log(error);
                navigate('/SignUp');
            })
        setUser({
            username: "", password: ""
        });
    }

    return (
        <form onSubmit={props.callback ? handleLoginSubmit : handleSignUpSubmit}>
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
                    {!props.callback && <div className="user"><label htmlFor="name">Username</label>
                        <input className="input"
                            type="text"
                            name="fname"
                            value={user.fname}
                            onChange={handleChange}
                        /></div>}
                    <div className="user">
                        <label htmlFor="email">Email Address</label>
                        <input className="input"
                            type="email"
                            name="username"
                            value={user.username}
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