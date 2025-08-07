import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <span>Tech</span>Blog
            </Link>
            <p className="footer-description">
              Sharing insights, tutorials, and the latest trends in web development 
              and technology to help developers stay ahead of the curve.
            </p>
            <div className="social-links">
              <a href="#" aria-label="GitHub" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Email" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/blog" className="footer-link">Blog</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Categories</h3>
            <div className="footer-links">
              <Link to="/blog?category=React" className="footer-link">React</Link>
              <Link to="/blog?category=JavaScript" className="footer-link">JavaScript</Link>
              <Link to="/blog?category=CSS" className="footer-link">CSS</Link>
              <Link to="/blog?category=Design" className="footer-link">Design</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-text">
              Subscribe to get the latest articles delivered directly to your inbox.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 TechBlog. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;