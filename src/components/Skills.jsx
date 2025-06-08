import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: '/Python.png' },
        { name: 'JavaScript', icon: '/JavaScript.png' },
        { name: 'TypeScript', icon: '/TypeScript.png' },
        { name: 'Java', icon: '/Java.png' },
        { name: 'Kotlin', icon: '/Kotlin.png' },
        { name: 'C', icon: '/C.png' },
        { name: 'C++', icon: '/C++ (CPlusPlus).png' },
        { name: 'C#', icon: '/csharp.png' },
        { name: 'HTML5', icon: '/HTML5.png' },
        { name: 'CSS3', icon: '/CSS3.png' }
      ]
    },
    {
      title: 'Full Stack',
      skills: [
        { name: 'React', icon: '/React.png' },
        { name: 'Node.js', icon: '/Node.js.png' },
        { name: '.NET Core', icon: '/NET core.png' },
        { name: 'Express', icon: '/Express.png' },
        { name: 'Flask', icon: '/Flask.png' },
        { name: 'FastAPI', icon: '/FastAPI.png' },
        { name: 'Redux', icon: '/Redux.png' },
        { name: 'Bootstrap', icon: '/Bootstrap.png' },
        { name: 'Material UI', icon: '/Material UI.png' },
        { name: 'Tailwind', icon: '/Tailwind CSS.png' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: '/AWS.png' },
        { name: 'Docker', icon: '/Docker.png' },
        { name: 'Terraform', icon: '/HashiCorp Terraform.png' },
        { name: 'Git', icon: '/Git.png' },
        { name: 'GitHub', icon: '/GitHub.png' },
        { name: 'GitLab', icon: '/GitLab.png' },
        { name: 'GitHub Actions', icon: '/GitHub Actions.png' },
        { name: 'Jenkins', icon: '/Jenkins.png' },
        { name: 'Kubernetes', icon: '/Kubernetes.png' },
        { name: 'NGINX', icon: '/NGINX.png' }
      ]
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'TensorFlow', icon: '/TensorFlow.png' },
        { name: 'PyTorch', icon: '/PyTorch.png' },
        { name: 'Scikit-learn', icon: '/scikit-learn.png' },
        { name: 'OpenCV', icon: '/OpenCV.png' },
        { name: 'OpenAPI', icon: '/OpenAPI.png' },
        { name: 'Pandas', icon: '/Pandas.png' },
        { name: 'NumPy', icon: '/NumPy.png' },
        { name: 'Matplotlib', icon: '/Matplotlib.png' },
        { name: 'MATLAB', icon: '/MATLAB.png' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: '/MongoDB.png' },
        { name: 'PostgreSQL', icon: '/PostgresSQL.png' },
        { name: 'MySQL', icon: '/MySQL.png' },
        { name: 'Firebase', icon: '/Firebase.png' },
        { name: 'Redis', icon: '/Redis.png' },
        { name: 'SQLite', icon: '/SQLite.png' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'VS Code', icon: '/Visual Studio Code (VS Code).png' },
        { name: 'Eclipse', icon: '/Eclipse IDE.png' },
        { name: 'Android Studio', icon: '/Android Studio.png' },
        { name: 'Postman', icon: '/Postman.png' },
        { name: 'Stack Overflow', icon: '/Stack Overflow.png' },
        { name: 'OpenGL', icon: '/OpenGL.png' },
        { name: 'Linux', icon: '/Linux.png' },
        { name: 'Ubuntu', icon: '/Ubuntu.png' },
        { name: 'PowerShell', icon: '/Powershell.png' },
        { name: 'Canva', icon: '/Canva.png' }
      ]
    }
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-icons">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item" title={skill.name}>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="skill-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 