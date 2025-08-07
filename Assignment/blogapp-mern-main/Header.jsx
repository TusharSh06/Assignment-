import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = ({ onSearchChange, searchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span>Tech</span>Blog
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${isActive('/blog') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <button 
            className="search-toggle"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <Search size={20} />
          </button>
          
          {isAuthenticated ? (
            <div className="user-menu">
              <button 
                className="user-menu-toggle"
                onClick={toggleUserMenu}
                aria-label="User menu"
              >
                <div className="user-avatar">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              </button>
              
              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <p className="user-name">{user?.name}</p>
                    <p className="user-email">{user?.email}</p>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link 
                    to="/profile" 
                    className="dropdown-item"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <User size={16} />
                    Profile
                  </Link>
                  <button 
                    className="dropdown-item logout-item"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/signin" className="auth-button signin-button">
                Sign In
              </Link>
              <Link to="/signup" className="auth-button signup-button">
                Sign Up
              </Link>
            </div>
          )}
          
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-bar">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;