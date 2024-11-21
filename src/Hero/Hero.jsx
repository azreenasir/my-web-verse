import styles from "./HeroStyle.module.css";

import heroImg from "../assets/pp.png";
import light from "../assets/sun.svg";
import dark from "../assets/moon.svg";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";
import linkedinLight from "../assets/linkedin-light.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import cv from "../assets/MUHAMMAD NUR AZREE BIN MOHAMAD NASIR.pdf";
import { useTheme } from "../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? light : dark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section
      id='Hero'
      className={styles.container}
    >
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile Picture'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          onClick={toggleTheme}
          alt='Color Mode Icon'
        />
      </div>
      <div className={styles.info}>
        <h1>
          Azree <br /> Nasir
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a
            href='https://www.linkedin.com/in/azreenasir/'
            target='_blank'
          >
            <img
              src={linkedinIcon}
              alt='linkedIn Logo'
            />
          </a>
          <a
            href='https://github.com/azreenasir'
            target='_blank'
          >
            <img
              src={githubIcon}
              alt='Github Logo'
            />
          </a>
        </span>
        <p className={styles.description}>
          Software Developer at Fermion Merimen.
        </p>
        <a
          href={cv}
          download
        >
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
