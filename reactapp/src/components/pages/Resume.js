import React from "react";

export default function Resume() {
  return (
    <div>
      <section className="skills">
        <p>I have experience in:</p>
        <ul className="listedSkills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>RESTful API</li>
          <li>SQL</li>
          <li>Sequelize</li>
          <li>Handlebars</li>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>Jest</li>
          <li>Git</li>
          <li>React</li>
        </ul>
      </section>
      <a href="/Resume.pdf" download>
        Click here to download my resume
      </a>
    </div>
  );
}
