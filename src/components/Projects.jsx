import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Chagas Disease Detection System',
    type: 'AI Full-Stack Application',
    githubLink: 'https://github.com/AnmolAcharya/Chagas_Disease_Detection',
    achievements: [
      'Developed an AI-based web app to detect Trypanosoma cruzi parasites in blood smear images, achieving 92%+ detection accuracy using YOLOv8',
      'Built a FastAPI backend to process 100+ image inferences per minute with <1s average response time',
      'Integrated a React frontend with dynamic bounding-box visualization, boosting diagnostic clarity for researchers',
      'Containerized the solution using Docker and designed architecture for cloud deployment with scalability in mind'
    ]
  },
  {
    title: 'The Word Search Game (TWSG)',
    type: 'Full-Stack Java Game Development',
    githubLink: 'https://github.com/AnmolAcharya/Full-Stack-Crossword-Game',
    achievements: [
      'Engineered a multiplayer crossword game handling concurrent players with real-time WebSocket synchronization, reducing message latency by 40%',
      'Achieved 95% unit test coverage and improved game function runtime by 60% through optimized state management',
      'Designed a modular full-stack architecture using Java, Maven, REST APIs, and JavaFX for cross-platform deployment',
      'Improved Agile sprint velocity by 20% and implementing Scrum practices for collaborative development'
    ]
  },
  {
    title: 'Serverless Job Tracker (AWS)',
    type: 'Cloud-Native Application',
    githubLink: 'https://github.com/AnmolAcharya/Job-Tracker-AWS-SERVERLESS-CRUD-APP-',
    achievements: [
      'Built a fully serverless job tracking platform with AWS Lambda, DynamoDB, Cognito, and API Gateway, to handle users flux',
      'Reduced backend overhead by 80% using event-driven architecture and modular Lambda functions',
      'Integrated OAuth2.0 login via AWS Cognito, enabling secure and scalable authentication with session management',
      'Leveraged the Serverless Framework to deploy infrastructure in <3 minutes and enabled seamless CRUD operations with 99.9% uptime'
    ]
  },
  {
    title: 'TravelAI: AI Trip Planner',
    type: 'AI Full-Stack Application',
    githubLink: 'https://github.com/AnmolAcharya/Companion_TravelAI',
    demoLink: 'https://companion-travel-ai.vercel.app',
    achievements: [
      'Developed an AI-powered travel planner using React, Firebase, and Google Gemini, generating itineraries and hotel recommendations in under 3 seconds per request leveraging real-time data fetching and AI-driven decision-making',
      'Implemented a modular React based frontend with React Router from Figma wireframes to create engaging, user-focused UI that prioritized usability, consistency, and smooth page transitions',
      'Optimized Firebase integration allowing real-time data fetching, reducing response latency by 30%'
    ]
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>
            {project.title} |{' '}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {project.demoLink && (
              <>
                {' '}
                |{' '}
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </>
            )}
          </h3>
          <p className="project-type">{project.type}</p>
          <ul>
            {project.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects; 