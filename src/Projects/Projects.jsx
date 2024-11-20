import styles from "./ProjectsStyles.module.css";
import viberr from "../assets/viberr.png";
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
          src={viberr}
          link='https://github.com/azreenasir/WorldWise-App'
          h3='WiseApp'
          desc='Location Review / Favorite Location'
        />
        <ProjectCard
          src={viberr}
          link='https://github.com/azreenasir/WorldWise-App'
          h3='WiseApp'
          desc='Location Review / Favorite Location'
        />
        <ProjectCard
          src={viberr}
          link='https://github.com/azreenasir/WorldWise-App'
          h3='WiseApp'
          desc='Location Review / Favorite Location'
        />
      </div>
    </section>
  );
}

export default Project;
