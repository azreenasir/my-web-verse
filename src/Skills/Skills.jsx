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
          skill='HTML'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='JavaScript'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='React'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Laravel'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Laravel'
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='HTML'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='JavaScript'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='React'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Laravel'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Laravel'
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='HTML'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='JavaScript'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='React'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Laravel'
        />
        <SkillList
          checkMarkIcon={checkMarkIcon}
          skill='Laravel'
        />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
