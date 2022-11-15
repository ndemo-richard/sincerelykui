// components/Footer.js
import Link from "next/link";


import styles from "../styles/Footer.module.scss";

const Footer = props => (
  <div className={styles.Footer}>
    <div className={styles.wrapper}>
      <div className={styles.advert} ><h3>join 20,000+ people who get our news alerts</h3>
        <form className="styles.form">
          <input className={styles.input} type="email" placeholder="example@email.com" />
          <input className={styles.input} type="submit" value="Subscribe"/>
        </form>
        <p>By signing up you agree to our Privacy Policy</p>
      </div>
      <div className={styles.about}>
        <h2>sincerely kui</h2>
        <p>Life is too short to be left to the people or things that make you unhappy
</p>
        <h3>Learn more about us</h3>
      </div>
      <div className={styles.contact}>
        <h2>Do you have any contribution!</h2>
        <h3>contact us today</h3>
      </div>
    </div>

    <Link href="/" passHref>
    <div className={styles.copyright}>
    copyright @ 2022
    </div>      
  </Link>
  </div>
);

export default Footer;