import React from "react";
import styles from "./Footer.module.css"; // Add CSS styles for the footer
import { FaInstagram, FaGlobe, FaEnvelope } from "react-icons/fa"; // Font Awesome icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkContainer}>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <FaInstagram className={styles.icon} />
          <span>Instagram</span>
        </a>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <FaGlobe className={styles.icon} />
          <span>Website</span>
        </a>
        <a href="mailto:your-email@example.com" className={styles.footerLink}>
          <FaEnvelope className={styles.icon} />
          <span>Email</span>
        </a>
      </div>
      <p className={styles.disclaimer}>
        Designed by Angela Ho <br />
        Built by the Tom Zhang
      </p>
    </footer>
  );
};

export default Footer;
