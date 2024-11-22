import myProjectImgExa from '../assets/exa.avif';
import myProjectImgNotes from '../assets/notes.avif';
import myProjectImgTodo from '../assets/todo.avif';
import myProjectImgBooks from '../assets/books.avif';
import myProjectImgRealtor from '../assets/realtor.avif';
import myProjectImgKindergarten from '../assets/kindergarten.avif';

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
  {
    name: 'books',
    link: 'https://book-lybrary-frontend.vercel.app/',
    link2GitHub: 'https://github.com/LysenkoDenys/book-library-app',
    image: myProjectImgBooks,
    description: 'manage your library.',
  },
  {
    name: 'realtor',
    link: 'https://realtor-lime.vercel.app',
    link2GitHub: 'https://github.com/LysenkoDenys/realtor-2022-10-22',
    image: myProjectImgRealtor,
    description: 'manage your real estate.',
  },
  {
    name: 'kindergarten',
    link: 'https://berizka.vercel.app',
    link2GitHub: 'https://github.com/LysenkoDenys/kindergarten',
    image: myProjectImgKindergarten,
    description: 'memories of my childhood.',
  },
];

export default projects;
