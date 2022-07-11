import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
export default function Secret() {
    const [logedUser, setLogedUser] = useState({});
    const location = useLocation();
    const findUser = location.state.sendEmail;
    useEffect(() => {
        axios.get(`/user/${findUser}`)
            .then(response => {
                setLogedUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [findUser]);
    const displayLogedUser = () => {

    }
    return (
        <div className="secret">
            <div className='tutorial'>
                {displayLogedUser()}
            </div>
        </div>
    )
}