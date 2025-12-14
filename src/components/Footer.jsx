import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="footer-col">
                    <a href="#" className="logo-footer">
                        <img src={logo} alt="SLE Logo" className="logo-img-footer" />
                        <span>Sri Lakshmi <span>Eng.</span></span>
                    </a>
                    <p>Precision manufacturing and industrial solutions since 1983.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer-col social-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Sri Lakshmi Engineering. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
