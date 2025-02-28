import { useEffect, useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "PHP",
  "Laravel",
  "JavaScript",
  "React.js",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "flask",
];
const SkillCard = (props) => {
  const { style } = props;

  return (
    <div className={`${style} bg-white rounded-lg p-4 shadow-lg`}>
      <h1 className="text-xl font-semibold ms-3 text-gray-600 mb-3">Tech Stack</h1>
      <div className="flex justify-center items-center flex-wrap">
        {skills.map((skill) => (
          <div className="m-1 px-3 py-1 text-sm text-white bg-gray-900 rounded-full">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
