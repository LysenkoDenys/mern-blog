import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import ProjectCard from '../components/ProjectCard';
import myProjectImgExa from '../assets/exa.avif';
import myProjectImgNotes from '../assets/notes.avif';
import myProjectImgTodo from '../assets/todo.avif';

const Projects = () => {
  const projects = [
    {
      name: 'exa',
      link: 'https://teach-examples.vercel.app',
      link2GitHub: 'https://github.com/LysenkoDenys/teach-examples',
      image: myProjectImgExa,
      description:
        'teach your children and yourself as well maths, languages and wisdom.',
    },
    {
      name: 'todo',
      link: `https://todo-v2-2023.vercel.app`,
      link2GitHub: 'https://github.com/LysenkoDenys/Todo-v2-2023-07-15',
      image: myProjectImgTodo,
      description: 'plan your future carefully and more precise',
    },
    {
      name: 'notes',
      link: 'https://notes-lysenkodenys.vercel.app',
      link2GitHub: 'https://github.com/LysenkoDenys/note-taking',
      image: myProjectImgNotes,
      description: 'note everything to future benefits.',
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Build fun and engaging projects while learning HTML, CSS, JavaScript,
        TypeScript, React.js, Next.js, Redux, Node,js!
      </p>
      <p>Here are some applications you can test, see the source code:</p>
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
