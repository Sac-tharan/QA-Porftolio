import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container modern-skills">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency & Expertise</h1>

          {techStack.experience.map((exp, i) => {
            return (
              <div key={i} className="skill">
                <div className="skill-header">
                  <span className="skill-name">{exp.Stack}</span>
                  <span className="skill-percentage">{exp.progressPercentage}</span>
                </div>
                <div className="meter">
                  <span
                    className="meter-fill"
                    style={{ width: exp.progressPercentage }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img
              alt="Skills"
              src={require("../../assets/images/skill.svg")}
            />
          )}
        </div>
      </div>
    </Fade>
  );
}
