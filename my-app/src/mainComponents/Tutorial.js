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
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id]);

    const displayTutorial = () => {
        return Object.keys(tutorial).map(({ name, content: { topicNo: { topic } } }) => {
            return (
                <div className="">
                    <div key={id} className="">
                        <div className="">{name}</div>
                        <div className="">{topic}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='tutorial'>
            {displayTutorial()}
        </div>
    )
}

export default Tutorial;