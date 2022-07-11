import './Tutorial.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Tutorial = () => {

    const [tutorial, setTutorial] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`/premaster/prince_mathur/maindata/api/${id}`)
            .then(response => {
                setTutorial(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id]);

    const displayTutorial = () => {

    }

    return (
        <div className='tutorial'>
            {displayTutorial()}
        </div>
    )
}

export default Tutorial;