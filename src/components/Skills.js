// Skills.js
import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [frontendSkills] = useState([
    { name: 'HTML/CSS', progress: 80 },
    { name: 'JavaScript', progress: 70 },
    { name: 'React.js', progress: 60 },
    { name: 'Bootstrap', progress: 60 },
    { name: 'Tailwind css', progress: 60 },
    { name: 'Core Java', progress: 60 },
    // Add more frontend skills here
  ]);
  const [backendSkills] = useState([
    { name: 'Node.js', progress: 75 },
    { name: 'Express.js', progress: 70 },   
    { name: 'IO.SOCKETS', progress: 70 },   
    { name: 'Advance Java', progress: 70 },
    // Add more backend skills here
  ]);
  const [databaseSkills] = useState([
    { name: 'MongoDB', progress: 70 },
    { name: 'MySQL', progress: 65 },
    // Add more database skills here
  ]);
  // const [additionalSkills, setAdditionalSkills] = useState([
  //   'API',
  //   'WEBSOCKETS',
  //   'AJAX/FETCH',
  //   'Time Management',
  //   'Problem Solving',
  //   'Communication',
    
  // ]);

   const [additionalSkills, setAdditionalSkills] = useState([
    { category: 'Soft Skills', skills: ['Time Management', 'Problem Solving', 'Communication'] },
    { category: 'Version Control', skills: ['Git', 'SVN'] },
    { category: 'Design Skills', skills: ['UI/UX Design', 'Adobe Photoshop', 'Adobe Illustrator'] },
    { category: 'Certifications and Training', skills: ['CertificationName1', 'CertificationName2'], link: 'https://example.com/certificates' }
    // Add more categories and skills here
  ]);

  return (
    <div className="skills">
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShowFrontend(!showFrontend)}>
          Frontend Languages
        </button>
        {showFrontend && (
          <div className="dropdown-content">
            <h2>Frontend Languages</h2>
            <ul>
              {frontendSkills.map((skill, index) => (
                <li key={index}>
                  {skill.name}
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShowBackend(!showBackend)}>
          Backend Languages
        </button>
        {showBackend && (
          <div className="dropdown-content">
            <h2>Backend Languages</h2>
            <ul>
              {backendSkills.map((skill, index) => (
                <li key={index}>
                  {skill.name}
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShowDatabase(!showDatabase)}>
          Database Languages
        </button>
        {showDatabase && (
          <div className="dropdown-content">
            <h2>Database Languages</h2>
            <ul>
              {databaseSkills.map((skill, index) => (
                <li key={index}>
                  {skill.name}
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="additional-skills">
        {additionalSkills.map((category, index) => (
          <div key={index} className="additional-skills-category">
            <h2>{category.category}</h2>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
            {category.link && (
              <p><a href={category.link} target="_blank" rel="noopener noreferrer">View Certificates</a></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

