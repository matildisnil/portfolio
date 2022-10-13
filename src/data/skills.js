import React from 'react';
import {
  SiJavascript, SiTypescript,
  SiReact, SiRedux, SiCss3, SiHtml5, SiMaterialui, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiGit, SiHeroku, SiNetlify, SiContentful,
} from 'react-icons/si';

const skills = [
  {
    title: 'Languages',
    techs: [
      {
        title: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        title: 'TypeScript',
        icon: <SiTypescript />,
      },
      {
        title: 'HTML5',
        icon: <SiHtml5 />,
      },
      {
        title: 'CSS3',
        icon: <SiCss3 />,
      },
      {
        title: 'Matlab',
      },
    ],
  },
  {
    title: 'Frontend',
    techs: [
      {
        title: 'React',
        icon: <SiReact />,
      },
      {
        title: 'Redux',
        icon: <SiRedux />,
      },
      {
        title: 'MUI',
        icon: <SiMaterialui />,
      },
      { title: 'PrimeReact' },
    ],
  },
  {
    title: 'Backend',
    techs: [
      {
        title: 'node.js',
        icon: <SiNodedotjs />,
      },
      {
        title: 'express',
        icon: <SiExpress />,
      },
      {
        title: 'MongoDB',
        icon: <SiMongodb />,
      },
      {
        title: 'PostgreSQL',
        icon: <SiPostgresql />,
      },
      { title: 'REST' },
    ],
  },
  {
    title: 'Tools',
    techs: [
      {
        title: 'Git',
        icon: <SiGit />,
      },
      {
        title: 'Heroku',
        icon: <SiHeroku />,
      },
      {
        title: 'Netlify',
        icon: <SiNetlify />,
      },
      {
        title: 'Contentful',
        icon: <SiContentful />,
      }],
  },
];

export default skills;
