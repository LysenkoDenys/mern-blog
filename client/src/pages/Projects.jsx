import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import ProjectCard from '../components/ProjectCard';
import projects from '../helpers/dbProjects';

const Projects = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Build fun and engaging projects while learning HTML, CSS, JavaScript,
        TypeScript, React.js, Next.js, Redux, Node,js!
      </p>
      <p>Here are some applications you can test and see the source code:</p>
      {/* project card */}
      <div className="max-w-7xl mx-auto p-3 flex flex-col gap-8 py-7">
        {projects.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Recent Projects
            </h2>
            <div className="flex flex-wrap gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <Link
              to={'/search'}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all projects
            </Link>
          </div>
        )}
      </div>
      {/* project card */}
      <CallToAction />
    </div>
  );
};

export default Projects;
