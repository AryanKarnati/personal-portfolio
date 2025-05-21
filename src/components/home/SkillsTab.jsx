import React from "react";
import Col from "react-bootstrap/Col";
import '../../scss/custom.scss';

const SkillsCarousel = ({ skills }) => {
  // Duplicate the skills array for seamless looping
  const allSkills = [...skills, ...skills];
  return (
    <div className="skills-carousel-outer">
      <div className="skills-carousel-inner">
        {allSkills.map((skill, idx) => (
          <div className="skill-carousel-item" key={idx}>
            <img src={skill.icon} alt={skill.name} className="skill-carousel-img" />
            <div className="skill-carousel-label">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

function SkillsTab({ skills }) {
  return (
    <Col xs={12}>
      <SkillsCarousel skills={skills} />
    </Col>
  );
}

export default SkillsTab;
