import './Tutorial.css';
import React, { useReducer, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function reducer(state, action) {
    switch (action.type) {
        case 'fetch_request':
            return { ...state, loading: true };
        case 'fetch_success':
            return { ...state, studyMaterial: action.payload, loading: false };
        case 'fetch_fail':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Tutorial = () => {

    const params = useParams();
    const { subjectName } = params;

    const [{ loading, error, studyMaterial }, dispatch] = useReducer(reducer, {
        loading: false,
        error: "",
        studyMaterial: []
    })

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'fetch_request' });
            try {
                const result = await axios.get(`/api/studyMaterials/${subjectName}`)
                dispatch({ type: 'fetch_success', payload: result.data });
            } catch (error) {
                dispatch({ type: 'fetch_fail', payload: error.message });
            }
        };
        fetchData();
    }, [subjectName]);

    return (
        loading ?
            <div>Loading...</div> :
            error ?
                <div>{error}</div> :
                <div className='tutorialContainer'>
                    <div className='tutorial'>
                        <div className='component'>
                            <img src={studyMaterial.bgURL} alt="topiclogo" />
                        </div>
                        <div className='component'>
                            {studyMaterial.subjectName}
                        </div>
                    </div>
                </div>
    )
}

export default Tutorial;