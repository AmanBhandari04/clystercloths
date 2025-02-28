import React from 'react'
import './Footer.css'
import { FcSearch } from "react-icons/fc";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-content">
                    <div className="newsletter">
                        <h2>Subscribe to Our Newsletter</h2>
                        <div className="newsletter-form">
                            <input className="newsletter-input" placeholder="Email here" />
                            <FcSearch />

                        </div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-column">
                            <div className="footer-about">
                                <h3>About Us</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla a consectetur dictum, metus elit hendrerit lectus, et venenatis elit dui nec lorem. Integer vel urna euismod, ultrices tortor at, fringilla est. Donec luctus massa a dolor maximus, nec pharetra felis gravida. Ut at ex nec orci fringilla vehicula. Fusce sagittis enim nec sapien cursus, nec consectetur arcu ultricies. Aliquam erat volutpat. Sed nec orci vehicula, dignissim est a, cursus ex. Suspendisse potenti. Integer lacinia urna eget libero interdum, eu luctus ligula gravida.
                                </p>
                            </div>
                        </div>
                        <div className="footer-column">
                            <div className="footer-links">
                                <h3>Useful Links</h3>
                                <a href="/">Home</a>
                                <a href="/aboutus">About</a>
                                <a href="/services">Products &amp; Services</a>
                                <a href="/contact">Contact Us</a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <div className="footer-contact">
                                <h3>Get In Touch</h3>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true" /> Delhi Mandawali
                                </p>
                                <p>
                                    <i className="fa fa-phone" aria-hidden="true" /> +91-9310628353
                                </p>
                                <p>
                                    <i className="fa fa-envelope" />ab9650315@example.com
                                </p>
                                <div className="footer-social">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-menu">
                    <div className="f-menu">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Help</a>
                        <a href="#">FAQs</a>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-row">
                        <div className="footer-column">
                            <p>
                                © <a href="#">Clyster Cloths</a>, All Rights
                                Reserved. 2024
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default Footer