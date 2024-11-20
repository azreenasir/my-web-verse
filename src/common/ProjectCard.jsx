// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, h3, desc }) {
  return (
    <a
      href={link}
      target='_blank'
    >
      <img
        className='hover'
        src={src}
        alt={`${h3} logo`}
      />
      <h3>{h3}</h3>
      <p>{desc}</p>
    </a>
  );
}

export default ProjectCard;
