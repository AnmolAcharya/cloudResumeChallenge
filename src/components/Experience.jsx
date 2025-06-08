import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Undergraduate Research Assistant – SPRLab',
    company: 'University of Texas at Arlington',
    date: 'Feb 2022 – Present',
    location: 'Arlington, Texas',
    responsibilities: [
      'Contributing to interdisciplinary research at the Security and Privacy Research Lab (SPRLab), under Dr. Shirin Nilizadeh',
      'Analyzing scam victim narratives on social media using AI/ML, NLP, and behavioral analysis to enhance online safety',
      'Leveraging large-scale data pipelines, annotated datasets, and GPT-based thematic classification to uncover privacy trends',
      'Exploring intersections of cybersecurity, psychology, and AI to understand digital manipulation and user vulnerability'
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <div className="date">
            {exp.company} | {exp.date} | {exp.location}
          </div>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience; 