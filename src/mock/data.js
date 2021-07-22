import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alberto | Editor de vídeo',
  lang: 'es',
  description: 'Bienvenido a mi página web, déjame explicarte un poco sobre mi', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '¡Hola! Soy ',
  name: 'Alberto Ayllon,',
  subtitle: 'y me dedico a la edición de vídeo de forma profesional.',
  cta: 'Saber más',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'Soy técnico audiovisual con doble titulación en "Iluminación, Captación y Tratamiento de la Imagen", además de "Realización de proyectos audiovisuales y espectáculos" por la EMAV.',
  paragraphTwo:
    'Aunque me dedico profesionalmente a la edición de vídeo, otra de mis pasiones es la fotografía, a la que me gusta dedicar horas en mi tiempo libre, no solo para capturar momentos, sino para transmitir mensajes y emociones.',
  paragraphThree: '',
  resume: '/CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pccomponentes.jpg',
    title: 'PC Componentes',
    info: 'Me encargaba de organizar, preproducir, guionizar, grabar y editar vídeos para las marcas de electrónica e informática y que posteriormente aparecían en la plataforma de Youtube, y Tik Tok.',
    info2:
      'Además de producir streaming en Twitch mostrando los productos y explicando su funcionamiento.',
    url: 'https://www.youtube.com/user/PcComponentescom',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ig.jpg',
    title: 'Instagram',
    info: 'Aquí muestro la que es la segunda de mis pasiones, la fotografía de retratos.',
    info2:
      'Regularme voy añadiendo contenido tanto al feed como a las historias, ¡así que no te olvides de seguirme!',
    url: 'https://instagram.com/topdelxixo',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '¿Te gustaría que trabajáramos juntos?',
  btn: '¡Hablemos!',
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

// ENGLISH
// // HEAD DATA
// export const headData = {
//   title: 'Alberto | Video Editor',
//   lang: 'es',
//   description: 'Welcome to my website, let me show you something about me', // e.g: Welcome to my website
// };

// // HERO DATA
// export const heroData = {
//   title: '',
//   name: 'Alberto Ayllon',
//   subtitle: "I'm a professional video editor",
//   cta: '',
// };

// // ABOUT DATA
// export const aboutData = {
//   img: 'me.jpg',
//   paragraphOne: 'Soy técnico audiovisual con doble titulación en "Iluminación,Captación y Tratamiento de la Imagen", además de "Realización de proyectos audiovisuales y espectáculos" por la EMAV.  ',
//   paragraphTwo: '',
//   paragraphThree: '',
//   resume: '', // if no resume, the button will not show up
// };

// // PROJECTS DATA
// export const projectsData = [
//   {
//     id: nanoid(),
//     img: 'pccomponentes.jpg',
//     title: 'PC Componentes',
//     info: '',
//     info2: '',
//     url: 'https://www.pccomponentes.com/',
//     repo: '', // if no repo, the button will not show up
//   },
//   {
//     id: nanoid(),
//     img: 'ig.jpg',
//     title: 'Instagram',
//     info: '',
//     info2: '',
//     url: 'https://instagram.com/topdelxixo',
//     repo: '', // if no repo, the button will not show up
//   },
// ];

// // CONTACT DATA
// export const contactData = {
//   cta: '',
//   btn: '',
//   email: 'berto.ayllon@gmail.com',
// };

// // FOOTER DATA
// export const footerData = {
//   networks: [
//     {
//       id: nanoid(),
//       name: 'instagram',
//       url: 'https://instagram.com/topdelxixo',
//     },
//     {
//       id: nanoid(),
//       name: 'twitter',
//       url: 'https://twitter.com/AlbertoAyllon93',
//     },
//     {
//       id: nanoid(),
//       name: 'linkedin',
//       url: 'https://www.linkedin.com/in/albertoaq/',
//     },
//   ],
// };

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
