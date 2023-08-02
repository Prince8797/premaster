import React, { useContext, useReducer, useState } from 'react'
import { DataContext } from '../../context/data-provider';
import './Secret.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_REQUEST':
            return { ...state, loadingUpdate: true };
        case 'UPDATE_SUCCESS':
            return { ...state, loadingUpdate: false };
        case 'UPDATE_FAIL':
            return { ...state, loadingUpdate: false };
        default:
            return state;
    }
};

export const AccountScreen = () => {

    const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
        loadingUpdate: false,
    })

    const { state, dispatch: ctxDispatch } = useContext(DataContext);
    const { userInfo } = state;

    const [user, setUser] = useState({
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        username: userInfo.username,
        password: ""
    });

    const handleChange = async (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put('/api/users/account', {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                password: user.password
            },
                {
                    headers: { Authorization: `Bearer ${userInfo.token}` }
                }
            );
            dispatch({ type: 'UPDATE_SUCCESS' });
            ctxDispatch({ type: 'USER_LOGIN', payload: data });
            window.localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('Account Updated Successfully')
        } catch (error) {
            dispatch({ type: 'UPDATE_FAIL' });
            toast.error('Account Updation failed');
        }
    }

    return (
        <div className='AccountContainer'>
            <form onSubmit={handleSubmit} className='formContainer'>
                <div className='myAccount'><p>My Account</p></div>
                <label htmlFor="lastname" className='label'>Update FirstName*</label>
                <input className="input" type="text" name="firstname" value={user.firstname} onChange={handleChange} required />
                <label htmlFor="lastname" className='label'>Update LastName*</label>
                <input className="input" type="text" name="lastname" value={user.lastname} onChange={handleChange} required />
                <label htmlFor="username" className='label'>Update Email*</label>
                <input className="input" type="email" name="username" value={user.username} onChange={handleChange} required />
                <label htmlFor="password" className='label'>Update Password*</label>
                <input className="input" type="password" name="password" value={user.password} onChange={handleChange} required />
                <button className="btn">Update Account</button>
            </form>
        </div>
    )
}

export default AccountScreen;
