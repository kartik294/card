import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="kartik.jpg" alt="kartik kaushik" />;
}

function Intro() {
  // Add content for Intro
  return (
    <div>
      <h1> Kartik kaushik</h1>
      <p>
        Passionate to become the front end devloper.I have learnt the skills
        like html,css ,javascript and currently started with reactjs
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👶" color="green" />
      <Skill skill="HTML+CSS" emoji="💪" color="#123456" />
      <Skill skill="Bootstrap" emoji="🧒" color="orangered" />
      <Skill skill="Tailwind" emoji="🧒" color="yellow" />
      <Skill skill="Javascript" emoji="🧒" color="orange" />
      <Skill />
      <Skill />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
