import React from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {socialMediaLinks} from "../../portfolio";

export default function Projects() {
  return (
    <div className="main" id="projects">
      <h1 className="project-title">View Github Projects</h1>

      <Button
        text={"View GitHub"}
        className="project-button"
        href={socialMediaLinks.github}
        newTab={true}
      />
    </div>
  );
}
