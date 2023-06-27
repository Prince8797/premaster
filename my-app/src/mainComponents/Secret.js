import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
export default function Secret() {

    const location = useLocation();
    const username = location.state.username;
    console.log(username);

    const [regUser, setRegUser] = useState([]);

    useEffect(() => {
        axios.get(`/user/${username}`)
            .then(response => {
                setRegUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [username]);

    return (
        <div className="secret">
            <div className='secret'>

            </div>
        </div>
    )
}