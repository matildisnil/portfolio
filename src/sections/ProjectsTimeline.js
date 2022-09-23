// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import projects from "../data/projects";
// import ProjectCard from '../components/ProjectCard';
// import { Typography, Box, Container } from '@mui/material';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// // import Roll from 'react-reveal/Roll';
// // import Bounce from 'react-reveal/Bounce';
// // import Slide from 'react-reveal/Slide';
// import Zoom from 'react-reveal/Zoom';

// export default function ProjectsTimeline() {
//   // const indexOfLast = projects.length - 1;

//   return (
//     <Container  id="Projects" className="section" sx={{width:{sm: 1, md: 0.8}, display: { xs: 'none', sm: 'block'}}} >
//       <Typography variant="h2" align="center" mb={5}>
//         My projects
//       </Typography>
//       <Timeline sx={{
//             [`& .${timelineItemClasses.root}:before`]: {
//               flex: 0,
//               padding: 0,
//             },
//           }}>
// {/*             <Roll top cascade duration="1500"> */}
//         {projects.map((project, index) => {
//           return (
//                   <TimelineItem>
//                     <TimelineSeparator>
//                       <TimelineConnector />
//                       <TimelineDot />
//                       <TimelineConnector />
//                     </TimelineSeparator>                    
//                     <TimelineContent>
//                       <Zoom>
//                         <ProjectCard thisProject={project} key={index} />
//                       </Zoom>
//                     </TimelineContent>
//                   </TimelineItem>
//                   )
//         })}
// {/* </Roll> */}
//       </Timeline>
//       <Box align="center">
//         <a href="#Skills">
//           <ExpandMoreOutlinedIcon sx={{fontSize: 150}}/>
//         </a>
//       </Box>
//     </Container>
//   );
// }
