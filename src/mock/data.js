import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alberto | Video Editor',
  lang: 'en',
  description: 'Welcome to my website, let me show you something about me', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alberto Ayllon',
  subtitle: "I'm a professional video editor",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pccomponentes.jpg',
    title: 'PC Componentes',
    info: '',
    info2: '',
    url: 'https://www.pccomponentes.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ig.jpg',
    title: 'Instagram',
    info: '',
    info2: '',
    url: 'https://instagram.com/topdelxixo',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'berto.ayllon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/topdelxixo',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AlbertoAyllon93',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/albertoaq/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
