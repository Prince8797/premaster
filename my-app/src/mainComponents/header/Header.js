// components
import './Header.css';
import UserProfile from './userProfile';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../../context/data-provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {

    const { state } = useContext(DataContext);
    const { userInfo } = state;

    return (
        <>
            <ToastContainer limit={1} />
            <div className="header">
                <div className="nav">
                    <Link to='/'>
                        <div className="logo"><img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="error" /></div>
                    </Link>
                </div>
                <div className="navbar" id='showHide'>
                    <div className="nav">
                        <Link to='/' className='link'>Home</Link>
                    </div>
                    <div className="nav">
                        <Link to='/Contact' className='link'>Contact</Link>
                    </div>
                    <div className="nav">
                        <Link to='/About' className='link'>About</Link>
                    </div>
                    <div className="nav">
                        <Link to='/Blog' className='link'>Blog</Link>
                    </div>
                    {
                        userInfo ?
                            <div className='userIcon'>
                                <UserProfile userInfo={userInfo} />
                            </div>
                            :
                            <>
                                <div className="nav logbox1">
                                    <Link to='/LogIn' className='link log'>LogIn</Link>
                                </div>
                                <div className="nav logbox2">
                                    <Link to='/SignUp' className='link log'>SignUp</Link>
                                </div>
                            </>
                    }
                </div>
                <div id="show" className='toggleBar'>
                    <button className='btn' id='showNav'><i className="fa fa-bars"></i></button>
                </div>
            </div>
        </>
    )
}

