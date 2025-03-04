import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container-footer">
                <div className="row-footer">

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="">About us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Get help</h4>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Shipping</a></li>
                            <li><a href="">Returns</a></li>
                            <li><a href="">Order Status</a></li>
                            <li><a href="">Payment Options</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="">Phone</a></li>
                            <li><a href="">Fridge</a></li>
                            <li><a href="">Laptop</a></li>
                            <li><a href="">Computer</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/zahid.814"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/jahidishere/?fbclid=IwAR0FrVRT3fDdf5VMi2xwFJLh_KfGfudjPcJ16boOxzNWDQkOnUUBo-M4aWo"><i className="fab fa-twitter"></i></a>
                            <a href="https://twitter.com/Mohammad_Jahid8?fbclid=IwAR0rU9D0L2O4-S_0ijhQq2oIDbwuf2--D0OeddV2a1tibz7uRcS3c1yWO-U"><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="bg-white" />
            <div className='footer-bottom'>
                <span className="footer-text" >Created By <a href="www.google.com">Mohammad Jahid</a> | <span
                >©</span> 2022 All rights reserved.</span>
            </div>

        </footer>
    );
};

export default Footer;