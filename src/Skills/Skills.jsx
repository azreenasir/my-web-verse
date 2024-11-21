import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../assets/checkmark-dark.svg";
import SkillList from "../common/SkillList";

function Skills() {
  return (
    <section
      id='skills'
      className={styles.container}
    >
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='C++'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Java'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Python'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='VB.Net'
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='JavaScript'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Bootstrap'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='PHP'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Laravel'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='React'
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='MySQL'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Microsoft SQL Server'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Firebase'
        />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
