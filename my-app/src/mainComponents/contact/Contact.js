import './Contact.css';
export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-first">
                <div className="contact-first-image">
                    <img decoding="async" fetchpriority="high" width="500" src="https://myanalyticsschool.com/blog/wp-content/uploads/2022/11/undraw_Blogging_re_kl0d.png" alt="" sizes="(max-width: 1223px) 100vw, 1223px" />
                </div>
                <div className="contact-first-content">
                    <p className="blog-heading">WELCOME TO THE MAS BLOGS</p>
                    <p>
                        PreMaster is an Ed-Tech start-up and open source website founded by Prince Mathur an IIT ISM student, providing an end-to-end solution for full stack web Development, data analytics, data science placements and related job preparation
                    </p>
                </div>
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