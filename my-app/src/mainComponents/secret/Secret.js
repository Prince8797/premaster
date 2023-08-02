import React, { useContext } from "react";
import './Secret.css';
import EditIcon from '@mui/icons-material/Edit';
import { DataContext } from "../../context/data-provider";

export default function Secret() {

    const { state } = useContext(DataContext);
    const { userInfo } = state;

    return (
        <div className="secret">
            <div className='secret-first'>
                <div className="userData">Username : {userInfo.firstname} {userInfo.lastname} <EditIcon style={{ color: "white" }} fontSize="small" /></div>
                <div className="userData">username : {userInfo.username}</div>
                <div className="userData">Country : India</div>
                <div className="userData">Recent Activiy : None</div>
            </div>
        </div>
    )
}