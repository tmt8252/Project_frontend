import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './Home.css'
const Footer = () => {
  return (
    <>
        {/* Updated Footer */}
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section company-info">
                    <h2 className="footer-logo">📚 BookHaven</h2>
                    <p className="company-description">
                        Discover a world of stories at BookHaven. Your premier destination for books, 
                        where every page turns into an adventure.
                    </p>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-section categories">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="/Fiction">Fiction</a></li>
                        <li><a href="/Non-Fiction">Non-Fiction</a></li>
                        <li><a href="/Children">Children's Books</a></li>
                        <li><a href="/Horror">Horror</a></li>
                        <li><a href="/Romance">Romance</a></li>
                    </ul>
                </div>

                <div className="footer-section newsletter">
                    <h3>Stay Updated</h3>
                    <p>Subscribe to our newsletter for exclusive offers and updates.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                aria-label="Email for newsletter"
                            />
                            <button type="submit" className="newsletter-btn">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2024 BookHaven. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="/privacy">Privacy</a>
                        <span className="separator">|</span>
                        <a href="/terms">Terms</a>
                        <span className="separator">|</span>
                        <a href="/sitemap">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer