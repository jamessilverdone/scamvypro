import { Link } from 'react-router-dom'
import { FiShield, FiTwitter, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <FiShield /> Scam<strong>vy</strong>
                        </div>
                        <p className="footer__tagline">
                            Empowering victims with knowledge, tools, and expert guidance to fight back against online fraud.
                        </p>
                        <div className="footer__socials">
                            <a href="#" aria-label="Twitter" id="footer-twitter"><FiTwitter /></a>
                            <a href="#" aria-label="LinkedIn" id="footer-linkedin"><FiLinkedin /></a>
                            <a href="#" aria-label="Facebook" id="footer-facebook"><FiFacebook /></a>
                            <a href="mailto:scamvypro@gmail.com" aria-label="Email" id="footer-email"><FiMail /></a>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4>Resources</h4>
                        <Link to="/scam-types">Types of Scams</Link>
                        <Link to="/recovery">Recovery Guide</Link>
                        <Link to="/red-flags">Red Flags to Watch</Link>
                        <Link to="/report">Report a Scam</Link>
                    </div>

                    <div className="footer__col">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/contact">Get Help Now</Link>
                        <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">FBI IC3</a>
                        <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">FTC Report Fraud</a>
                    </div>

                    <div className="footer__col">
                        <h4>Contact</h4>
                        <p>Cybersecurity Expert Consultation</p>
                        <a href="mailto:scamvypro@gmail.com">scamvypro@gmail.com</a>
                        <Link to="/contact" className="btn btn-primary footer__btn">Free Consultation</Link>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        &copy; {new Date().getFullYear()} Scamvy. All rights reserved. &nbsp;|&nbsp;
                        <strong>Disclaimer:</strong> This website provides educational information only. We are not a law firm and do not provide legal advice. If you are in immediate danger, contact your local authorities.
                    </p>
                </div>
            </div>
        </footer>
    )
}
