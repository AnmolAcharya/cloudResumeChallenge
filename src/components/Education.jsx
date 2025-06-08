import React from 'react';

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-header">
          <h3>University of Texas at Arlington</h3>
          <span className="location">Arlington, Texas</span>
        </div>
        <p>Bachelor of Science in Computer Science</p>
        <ul>
          <li>GPA: 3.92/4.00</li>
          <li>
            Relevant Coursework: Data Structures and Algorithms, Software Testing,
            Artificial Intelligence, Database Management, Object-Oriented Programming,
            Operating Systems, Computer Networks, Computer Graphics
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education; 