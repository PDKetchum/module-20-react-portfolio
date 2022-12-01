import React from "react";

export default function AboutMe() {
  return (
    <div>
      <section className="aboutMe">
        <p>I'm an aspiring software engineer based in St. Paul, Minnesota.</p>
        <img className="profile" src="./images/face.png" alt="Profile" />
      </section>
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
    </div>
  );
}
