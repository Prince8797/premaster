import { useContext, } from 'react';
import './Home.css';
import {
    Link,
} from "react-router-dom";
import HomeCard from './HomeCard';
import { DataContext } from '../../context/data-provider';

export default function Home() {

    const { state } = useContext(DataContext);
    const { userInfo } = state;

    return (
        <div className="home">
            <div className="home-first">
                <div className="home-first-content">
                    <div className="content-title"><p>Welcome to PreMaster !!</p></div>
                    <div className="content-discription"><p>Are You confuse with how to begin and where to begin?<br /> Begin your journey to become a Fullstack Web Developer with PreMaster. Here You will get whatever you need to conqueror your goal of becoming real time full stact Web Developer. </p></div>
                    <hr />
                    {
                        userInfo ?
                            <div className="content-discription">Start Your Journey Now!</div>
                            :
                            <div className="home-register">
                                <Link to="/SignUp"><button>SignUp</button></Link>
                                <Link to="/LogIn"><button>Login</button></Link>
                            </div>
                    }
                </div>
            </div>
            <div className="home-second">
                <div className="second-box"></div>
            </div>
            <div className="home-data">
                <HomeCard />
            </div>
        </div>
    )
}