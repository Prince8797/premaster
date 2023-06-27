import './Header.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Tutorial from './Tutorial';
import Secret from './Secret';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

export default function Header() {
    return (
        <Router>
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
                    <div className="nav logbox1">
                        <Link to='/LogIn' className='link log'>LogIn</Link>
                    </div>
                    <div className="nav logbox2">
                        <Link to='/SignUp' className='link log'>SignUp</Link>
                    </div>
                </div>
                <div id="show" className='toggleBar'>
                    <button className='btn' id='showNav'><i className="fa fa-bars"></i></button>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/About' element={<About />} />
                <Route path='/Blog' element={<Blog />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/LogIn' element={<LogIn />} />
                <Route path='/:id' element={<Tutorial />} />
                <Route path='/user/:username' element={<Secret />} />
            </Routes>
        </Router>
    )
}

