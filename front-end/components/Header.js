// components/Header.js
import Link from "next/link";


import styles from "../styles/Header.module.scss";

const Header = props => (
	
	<div className={styles.logo}>
      <img src="/logo.png" alt="logo" />
      </div>
	

);

export default Header;