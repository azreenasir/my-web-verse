// eslint-disable-next-line react/prop-types
function SkillList({ checkMarkIcon, skill }) {
  return (
    <span>
      <img
        src={checkMarkIcon}
        alt='Checkmark Icon'
      />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
