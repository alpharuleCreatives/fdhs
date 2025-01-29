import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import ArrowDown from '../../assets/images/arrow-down.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close menu or dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen, dropdownOpen]);

    return (
        <header className={styles.header}>
            {/* Logo Section */}
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logoImage} />
            </div>

            {/* Mobile Menu Button */}
            <button className={styles.mobileMenuButton} onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navbar Section */}
            <nav ref={menuRef} className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
                <div
                    className={styles.dropdownContainer}
                    ref={dropdownRef}
                    onClick={toggleDropdown}
                >
                    <button className={styles.ctaButton}>
                        Enroll Now
                        <img src={ArrowDown} alt="Dropdown Icon" className={styles.arrowDownIcon} />
                    </button>
                    {dropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            <a href="https://example.com/form1" target="_blank" rel="noopener noreferrer">
                                Register as a Donor
                            </a>
                            <a href="https://example.com/form2" target="_blank" rel="noopener noreferrer">
                                Register as a Corporate
                            </a>
                            <a href="https://example.com/form3" target="_blank" rel="noopener noreferrer">
                                Register as a Volunteer
                            </a>
                            <a href="https://example.com/form4" target="_blank" rel="noopener noreferrer">
                                Register as a Caregiver
                            </a>
                            <a href="https://example.com/form5" target="_blank" rel="noopener noreferrer">
                                Register as an Educator
                            </a>
                            <a href="https://example.com/form6" target="_blank" rel="noopener noreferrer">
                                Register for Collaboration for Health Camps
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
