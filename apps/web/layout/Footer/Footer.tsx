import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by{' '}
      <Link href="https://github.com/nerdchanii" target="_blank" rel="author noreferrer">
        <span>nerdchanii</span>
      </Link>
    </footer>
  );
};

export default Footer;
