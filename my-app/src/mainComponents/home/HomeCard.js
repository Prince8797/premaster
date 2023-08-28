import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import logger from 'use-reducer-logger'
// import './HomeCard.css';

function reducer(state, action) {
    switch (action.type) {
        case 'fetch_request':
            return { ...state, loading: true };
        case 'fetch_success':
            return { ...state, studyMaterials: action.payload, loading: false };
        case 'fetch_fail':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default function HomeCard() {

    const [{ loading, error, studyMaterials }, dispatch] = useReducer(reducer, {
        loading: false,
        error: "",
        studyMaterials: []
    })

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'fetch_request' });
            try {
                const result = await axios.get('/api/studyMaterials')
                dispatch({ type: 'fetch_success', payload: result.data });
            } catch (error) {
                dispatch({ type: 'fetch_fail', payload: error.message });
            }
        };
        fetchData();
    }, []);


    return (
        <>
            {
                loading ?
                    <div>Loading...</div> :
                    error ?
                        <div>{error}</div> :
                        studyMaterials.map((items) => (
                            <div className="card" key={items.id}>
                                <div className="card-box">
                                    <div className="card-image"><img src={items.bgURL} alt="error" /></div>
                                    <div className="card-text">{items.subjectName}</div>
                                    <div className="card-text">{items.subjectDiscription}</div>
                                    <div className="card-button">
                                        <Link to={`/${items.subjectName}`}><p>Learn {items.subjectName}</p></Link>
                                    </div>
                                </div>
                            </div>
                        ))
            }
        </>
    )
}