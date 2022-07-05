import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Link,
} from "react-router-dom";
import './HomeCard.css';

export default function HomeCard() {

    const [mainApiData, setMainApiData] = useState([]);

    useEffect(() => {
        axios.get("/premaster/prince_mathur/maindata/api")
            .then(response => {
                console.log(response.data);
                setMainApiData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const displayMainApiData = () => {
        return mainApiData.map(items => {
            return (
                <div className="card">
                    <div key={items._id} className="card-box">
                        <div className="img card-child"><img src={items.bgURL} alt="error" /></div>
                        <div className="card-title card-child">{items.subject.subjectName}</div>
                        <div className="card-content card-child">{items.subject.subjectDiscription}</div>
                        <Link to={`/${items._id}`}><button className="card-btn card-child">Learn {items.subject.subjectName}</button>
                        </Link>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            {displayMainApiData()}
        </div>
    )
}