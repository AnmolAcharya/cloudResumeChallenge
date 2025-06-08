import React from 'react';
import '../styles/Achievements.css';

const achievements = [
  'Upsilon Pi Epsilon (UPE): Inducted into the Honor Society of UPE, recognized as one of the top 1% of computer Science students for outstanding academic performance and professional development (Fall 2024 - Present)',
  'ACM (Association for Computing Machinery) member: Engaged in Hackathons and tech-focused events',
  'AI/ML Fellow at Cornell Tech: Selected as AI/ML fellow through Break Through Tech Virtual AI program',
  'Dean\'s List recipient (UTA College of Engineering): Academic year 2022, 2023, 2024'
];

const Achievements = () => {
  return (
    <section className="achievements">
      <h2>Honors & Achievements</h2>
      <div className="achievement-list">
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements; 