import styles from "./Footerstyles.module.css";
import reactLogo from "../assets/react.svg";

function Footer() {
  return (
    <section
      id='footer'
      className={styles.container}
    >
      <h3>Build with React</h3>
      <a
        href='https://react.dev/'
        target='_blank'
      >
        <img
          src={reactLogo}
          alt='React Logo'
        />
      </a>
      <br />
      <p>
        &copy; 2024 Azree Nasir. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
