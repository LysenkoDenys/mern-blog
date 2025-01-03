import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative w-full border border-teal-500 h-[400px] overflow-hidden rounded-lg sm:w-[400px] hover:border-2 transition-all">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image || 'https://via.placeholder.com/400'}
          alt={`${project.name} cover`}
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </a>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">
          {project.name || 'project name'}
        </p>
        <p className="text-lg  line-clamp-2">
          {project.description || 'project description'}
        </p>
        <a
          href={project.link2GitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Test the project
        </a>
      </div>
    </div>
  );
};

// Add prop-types validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    link: PropTypes.string.isRequired,
    link2GitHub: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
