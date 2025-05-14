import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo" onClick={() => setIsOpen(false)}>Portfolio</Link>
                <button 
                    className={`hamburger ${isOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
                <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </div>
        </nav>
    )
}
