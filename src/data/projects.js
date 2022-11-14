import React from 'react';
import {
  SiReact, SiMaterialui, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiTypescript,
} from 'react-icons/si';

const projects = [
  // {
  //   title: 'See you there!',
  //   techs: [
  //     { name: 'Express', icon: <SiExpress /> },
  //     { name: 'React', icon: <SiReact /> },
  //     { name: 'Node.js', icon: <SiNodedotjs /> },
  //     { name: 'MUI', icon: <SiMaterialui /> },
  //   ],
  //   description: 'This is a web app I made for hackday at </salt>.
  //  It helps you synchronize your travelling on Stockholm public transportation
  // with that of a friend. The backend is made with node.js and express and the
  // frontend with React and MUI. Using TRAFIKLABs SL APIs.',
  //   githubLink: { link: 'https://github.com/matildisnil/seeYouThereFrontend', buttonTitle: 'Github Frontend' },
  //   secondGithubLink: 'https://github.com/matildisnil/seeYouThereBackend',
  //   deployedLink: 'https://see-you-there.herokuapp.com/',
  //   imageAddress: '/seeYouThere.png',
  // },
  {
    title: 'Activity-knot',
    techs: [{ name: 'PostgreSQL', icon: <SiPostgresql /> }, { name: 'Express', icon: <SiExpress /> }, { name: 'React', icon: <SiReact /> }, { name: 'Node.js', icon: <SiNodedotjs /> }],
    description: "My mob's final project for the </salt> bootcamp. A web app to help you meet new people who share your interests. Allows you to create, read, update and delete events. Uses a PERN-stack, and PrimeReact components.",
    githubLink: { link: 'https://github.com/matildisnil/saltFinalProjectFrontend', buttonTitle: 'Github Frontend' },
    secondGithubLink: 'https://github.com/matildisnil/saltFinalProjectBackend',
    deployedLink: 'https://activity-knot.herokuapp.com/',
    imageAddress: '/activity_knot6.png',
  },
  {
    title: 'Dogalogue',
    techs: [{ name: 'MongoDB', icon: <SiMongodb /> }, { name: 'Express', icon: <SiExpress /> }, { name: 'React', icon: <SiReact /> }, { name: 'Node.js', icon: <SiNodedotjs /> }, { name: 'TypeScript', icon: <SiTypescript /> }],
    description: "This mob project is one of my first TypeScript projects. It is a simple web app with CRUD operations to list dogs. We are using MongoDB to save the data and we've implemented it with Mongoose. Using Dog API (https://dog.ceo/dog-api/) for pictures.",
    githubLink: { link: 'https://github.com/matildisnil/puppiesFullstack', buttonTitle: 'Github fullstack' },
    deployedLink: 'https://dogalogue.herokuapp.com/',
    imageAddress: '/dogalogue.png',
  },
  {
    title: 'Portfolio',
    techs: [{ name: 'React', icon: <SiReact /> }, { name: 'MUI', icon: <SiMaterialui /> }],
    description: 'This portfolio site, made using React and MUI. Deployed on Netlify. My first project using MUI, which has been a very nice experience. The contact form is handled using formsubmit.co.',
    githubLink: { link: 'https://github.com/matildisnil/portfolio', buttonTitle: 'Github Frontend' },
    deployedLink: 'https://matilda-lindahl-portfolio.netlify.app/',
    imageAddress: '/portfolio4.png',
  },
];

export default projects;
