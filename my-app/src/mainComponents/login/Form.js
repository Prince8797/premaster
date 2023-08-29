import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components

import './Form.css';
import { DataContext } from "../../context/data-provider";
import { API_URL } from "../../constants";


export default function Form(props) {

    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(DataContext);
    const { userInfo } = state;

    // If user is loged In and trying to call /login or /signup route then it will not work.

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }

    }, [navigate, userInfo])

    const [user, setUser] = useState({
        firstname: "", lastname: "", username: "", password: ""
    });

    const handleChange = async (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    //   handle Signup button Submit

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();

        // sending request to routes.js in server for signup user.
        // {data}  is the data which we will get from db ie., user's all details.
        try {
            const { data } = await axios.post('/api/users/signup', {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                password: user.password
            });  // these data will be send to request.body of route.js in server.

            ctxDispatch({ type: 'USER_LOGIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/');
            toast.success('Signup Successful', { position: toast.POSITION.TOP_RIGHT });
        } catch (error) {
            toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
        }

        setUser({
            firstname: "", lastname: "", username: "", password: ""
        });
    }


    // Handle Login Button Submit

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        // {data} is the response json data containing all the user details coming from database.

        try {
            const { data } = await axios.post(`${API_URL}/api/users/login`, {
                username: user.username, // these data will be send to request.body of route.js in server.
                password: user.password
            });
            ctxDispatch({ type: 'USER_LOGIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/');
            toast.success('Login Successful', { position: toast.POSITION.TOP_RIGHT });
        } catch (error) {
            toast.error('Invalid email/password', { position: toast.POSITION.BOTTOM_CENTER });
        }

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
                        <div className="option-font">{props.callback ? "Login" : "SignUp"} with username</div>
                        <div><hr /></div>
                    </div>

                    {
                        !props.callback &&
                        <>
                            <div className="user"><label htmlFor="firstname">FirstName</label>
                                <input className="input" type="text" name="firstname" value={user.firstname} onChange={handleChange} required />
                            </div>
                            <div className="user"><label htmlFor="lastname">LastName</label>
                                <input className="input" type="text" name="lastname" value={user.lastname} onChange={handleChange} required />
                            </div>
                        </>
                    }

                    <div className="user">
                        <label htmlFor="username">Email</label>
                        <input className="input" type="email" name="username" value={user.username} onChange={handleChange} required />
                    </div>

                    <div className="user">
                        <label htmlFor="password">Password</label>
                        <input className="input" type="password" name="password" value={user.password} onChange={handleChange} required />
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