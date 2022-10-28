import React from "react";

const Skills = () => {
  return (
    <section id="skills">
        <div className="skills-container">
        <h1 className="devsk-h1">Developer Skills</h1>
        <br />
        <br />
      <div className="skills">
        <div>
          <h4>Front End</h4>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>CSS / Sass</li>
            <li>HTML</li>
            <li>jQuery</li>
            <li>Material-UI</li>
            <li>React-Bootstrap</li>
            <li>EJS</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div>
          <h4>Back End</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Python</li>
            <li>Django</li>
            <li>PostgreSQL</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div>
          <h4>Soft Skills</h4>
          <ul>
            <li>Empathy</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem-Solving</li>
            <li>Perseverance</li>
            <li>Attention to Detail</li>
            <li>Critical Thinking</li>
            <li>Organizational</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
