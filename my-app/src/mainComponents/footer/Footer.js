import './Footer.css';
export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer">
            <div className="footerLogo foot">
                <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="logo" />
                <label htmlFor="img" className='brandName'>Prince Mathur</label>
            </div>
            <div className="footer-content">
                PreMaster is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using PreMaster, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </div>
            <div className="sites foot">
                <div className="img"><img src={process.env.PUBLIC_URL + 'images/facebookLogo.png'} alt='error' /></div>
                <div className="img"><img src={process.env.PUBLIC_URL + 'images/instagramLogo.png'} alt='error' /></div>
                <div className="img"><a href="https://www.linkedin.com/in/prince-mathur-61877b208/"><img src={process.env.PUBLIC_URL + 'images/linkedInLogo.png'} alt='error' /></a></div>

            </div>
            <div className="copyright foot">
                All copyrights reserved &copy; {year}
            </div>
        </div>
    )
}