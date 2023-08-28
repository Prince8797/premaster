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
                    <div className="content-discription">
                        <p>
                            Are You confuse with how to begin and where to begin?<br /> Begin your journey to become a Fullstack Web Developer with PreMaster. Here You will get whatever you need to conqueror your goal of becoming real time full stack Web Developer.
                        </p>
                    </div>
                    <hr />
                    {
                        userInfo ?
                            <div className="content-discription">Start Your Journey Now!</div>
                            :
                            <div className="home-register">
                                {/* <Link to="/SignUp"><button>SignUp</button></Link> */}
                                <Link to="/LogIn"><button>Start Now!</button></Link>
                            </div>
                    }
                </div>
            </div>
            <div className="home-second">
                <div className="home-second-image"></div>
                <div className="home-second-content">
                    <h2>My Learning</h2>
                    <p className="content-para">
                        Track your progress with our free "My Learning" program.
                        Log in to your account, and start earning points!
                    </p>
                    <h2>
                        PreMaster Spaces</h2>
                    <p className="content-para">
                        If you want to create your own website, check out PreMaster Spaces.
                        It is free to use, and does not require any setup:
                    </p>
                    {
                        userInfo ?
                            <div className="content-discription">Start Your Journey Now!</div>
                            :
                            <div className="home-second-register">
                                <Link to="/LogIn"><p>Start For Free</p></Link>
                            </div>
                    }
                </div>
            </div>
            <div className="home-card">
                <HomeCard />
            </div>
            <div className="contact-second">
                <div className="contact-second-heading">Latest Guides & Articles</div>
                <div className="second-content-container">
                    <div className="contact-second-content"><a href="https://myanalyticsschool.com/blog/how-to-research-essay-writing-services-and-a-legit-academic-research-paper-writing-service/">How to Research Essay Writing Services and a Legit Academic Research Paper Writing Service</a></div>
                    <div className="contact-second-content"><a href="https://myanalyticsschool.com/blog/category/python/">This features news and tutorials about Python, Django, using Python for Web Development and Machine Learning.</a></div>
                    <div className="contact-second-content"><a href="https://myanalyticsschool.com/blog/category/data-science/">We offer inside perspective on what it's really like to work as a data scientist, as well as the opportunity to stay up to date with all the happenings of the industry.</a></div>
                </div>
            </div>
        </div>
    )
}