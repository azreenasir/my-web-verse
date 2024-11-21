import styles from "./ProjectsStyles.module.css";

import travelLogo from "../assets/travelApp.png";
import PopcornLogo from "../assets/popcorn.png";
import WorldWiseLogo from "../assets/worldwise.png";
import ProjectCard from "../common/ProjectCard";

function Project() {
  return (
    <section
      id='projects'
      className={styles.container}
    >
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={travelLogo}
          link='https://travel-list-gold.vercel.app/'
          h3='Travel List App'
          desc='List your needs before travel'
        />
        <ProjectCard
          src={WorldWiseLogo}
          link='https://github.com/azreenasir/WorldWise-App'
          h3='WiseApp'
          desc='Review/Favorite Location'
        />
        <ProjectCard
          src={PopcornLogo}
          link='https://use-popcorn-steel.vercel.app/'
          h3='UsePopcorn'
          desc='Rate your favorite Movies'
        />
      </div>
    </section>
  );
}

export default Project;
