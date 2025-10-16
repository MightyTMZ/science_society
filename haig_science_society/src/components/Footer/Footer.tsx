import React from "react";
import styles from "./Footer.module.css"; // Add CSS styles for the footer
import { FaInstagram, FaGlobe, FaEnvelope } from "react-icons/fa"; // Font Awesome icons
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkContainer}>
        <Link
          href="https://www.instagram.com/haigsciencesociety/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <FaInstagram className={styles.icon} />
          <span>Instagram</span>
        </Link>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <FaGlobe className={styles.icon} />
          <span>Website</span>
        </Link>
        <Link
          href="mailto:earlhaigsciencesociety@gmail.com"
          className={styles.footerLink}
        >
          <FaEnvelope className={styles.icon} />
          <span>Email</span>
        </Link>
      </div>
      {/* <p className={styles.disclaimer}>
        Built by{" "}
        <strong>
            Tom Zhang
        </strong>
      </p> */}
    </footer>
  );
};

export default Footer;
