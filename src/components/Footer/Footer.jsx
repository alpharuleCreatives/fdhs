// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.png"; // Ensure the logo path is correct

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Left Section with Logo */}
      <div className={styles.upperfooter}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="FDHS Logo" />
        </div>

        {/* Center Section with Links */}
        <div className={styles.footerLinks}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Right Section with Subscribe Form */}
        <div className={styles.subscribeSection}>
          <h3>Subscribe</h3>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Email address" required />
            <button type="submit">→</button>
          </form>
          <p className={styles.subscribeText}>
            Hello, we are TU HI TU. Trying to make an effort to put the right
            people for you to get the best results.
          </p>
        </div>
      </div>

      {/* Bottom Section with Terms, Privacy, Cookies */}
      <div className={styles.footerBottom}>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/cookies">Cookies</a>
      </div>
    </footer>
  );
};

export default Footer;
