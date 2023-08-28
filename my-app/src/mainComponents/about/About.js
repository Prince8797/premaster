import './About.css';
import { useContext, } from 'react';
import {
    Link,
} from "react-router-dom";
import { DataContext } from '../../context/data-provider';
export default function About() {

    const { state } = useContext(DataContext);
    const { userInfo } = state;
    const User = "User";

    return (
        <div className="about">
            <div className="about-first">
                <div className="about-first-content">
                    <div className="about-content-title"><p>About PreMaster</p></div>
                    <div className="about-content-discription">
                        <p>
                            Hi {userInfo ? userInfo.firstname : User} !! PreMaster is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors. While using PreMaster, you agree to have read and accepted our terms of use, cookie and privacy policy.
                        </p>
                    </div>
                    <hr />
                    {
                        userInfo ?
                            <div className="content-discription">Start Your Journey Now!</div>
                            :
                            <div className="home-register">
                                <Link to="/LogIn"><button>Start Now!</button></Link>
                            </div>
                    }
                </div>
                <div className='about-second-content'></div>
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