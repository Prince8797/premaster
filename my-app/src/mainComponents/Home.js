import './Home.css';
import {
    Link,
} from "react-router-dom";
import HomeCard from './HomeCard';
export default function Home() {
    return (
        <div className="home">
            <div className="home-first">
                <div className="home-first-content">
                    <div className="content-title"><p>Welcome to PreMaster !!</p></div>
                    <div className="content-discription"><p>Are You confuse Where to begin? Let's begin your journey to become a Fullstack Web Developer with PreMaster. Here You will get whatever you need to conqueror your goal of becoming real time full stact Web Developer. </p></div>
                    <hr />
                    <div className="home-register">
                        <Link to="/SignUp"><button>SignUp</button></Link>
                        <Link to="/LogIn"><button>Login</button></Link>
                    </div>
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