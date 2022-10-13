import React from 'react';
import {
  SiReact, SiMaterialui, SiNodedotjs, SiExpress, SiPostgresql,
} from 'react-icons/si';

const projects = [
  {
    title: 'Activity-knot',
    techs: [{ name: 'PostgreSQL', icon: <SiPostgresql /> }, { name: 'Express', icon: <SiExpress /> }, { name: 'React', icon: <SiReact /> }, { name: 'Node.js', icon: <SiNodedotjs /> }],
    description: "My mob's final project for the </salt> bootcamp. A web app to help you meet new people who share your interests. Allows you to create, read, update and delete events. Uses a PERN-stack, and PrimeReact components.",
    githubLink: 'https://github.com/matildisnil/saltFinalProjectFrontend',
    secondGithubLink: 'https://github.com/matildisnil/saltFinalProjectBackend',
    deployedLink: 'https://activity-knot.herokuapp.com/',
    imageAddress: '/activity_knot6.png',
  },
  {
    title: 'See you there!',
    techs: [{ name: 'React', icon: <SiReact /> }, { name: 'Node.js', icon: <SiNodedotjs /> }, { name: 'Express', icon: <SiExpress /> }, { name: 'MUI', icon: <SiMaterialui /> }],
    description: "This is a project I made for hackday at </salt>. It's a web app to help you synchronize your travelling on Stockholm public transportation with that of a friend. The backend is made with node.js and express and the frontend with React and MUI.",
    githubLink: 'https://github.com/matildisnil/seeYouThereFrontend',
    secondGithubLink: 'https://github.com/matildisnil/seeYouThereBackend',
    deployedLink: 'https://see-you-there.herokuapp.com/',
    imageAddress: '/seeYouThere.png',
  },
  {
    title: 'Portfolio',
    techs: [{ name: 'React', icon: <SiReact /> }, { name: 'MUI', icon: <SiMaterialui /> }],
    description: 'This portfolio site, made using React and MUI. Deployed on Netlify. My first project using MUI, which has been a very nice experience. The contact form is handled using formsubmit.co.',
    githubLink: 'https://github.com/matildisnil/portfolio',
    deployedLink: 'https://matilda-lindahl-portfolio.netlify.app/',
    imageAddress: '/portfolio3.png',
  },
];

export default projects;
