// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Footer.module.scss';

const Footer = (props) => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className={styles.Footer}>
      <Link href="/" passHref>
        <div className={styles.copyright}>
          &copy; {currentYear} all Rights Reserved
        </div>
      </Link>
    </div>
  );
};

export default Footer;