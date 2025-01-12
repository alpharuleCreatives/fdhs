// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // ✅ Close menu when clicking outside the dropdown
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <header className={styles.header}>
            {/* Logo Section (Left Side) */}
            <div className={styles.logoContainer}>
                <img src={logo} alt="FDHS Logo" className={styles.logoImage} />
            </div>

            {/* Mobile Menu Button (Right Side) */}
            <button className={styles.mobileMenuButton} onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navbar Section (Dropdown Below Navbar) */}
            <nav ref={menuRef} className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
                <a href="#enroll" className={styles.ctaButton} onClick={() => setMenuOpen(false)}>Enroll Now</a>
            </nav>
        </header>
    );
};

export default Header;
