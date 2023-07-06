import Image from "next/image";
import "./index.css";
import React from 'react';
import Ellipse from "../Ellipse/Ellipse";
import Reveal from '../Reveal'
import data from "../../utils/data";

function ProjectCard() {

  return (
    <>
    {data.map(project => (
      <Reveal key={project.id}>
        <div className="cover" >
        <div className="row project-card">
          <div className="image-container">
              <Image className="img-fluid"
                      src={project.thumb}
                      alt="Picture of the project"
                      style={{objectFit: "cover"}}
                      />
          </div>
          <div className="project-text">
              <h3 className="text-center">{project.appName}</h3>
              <div className="">{project.shortDescription}</div>
              <div className="description">{project.description}</div>
              <Ellipse size="30px" background="linear-gradient(175deg, rgba(0, 0, 0, 0.25) 10%, rgb(176, 176, 232) 100%)" top={85} left={80}/>
              <div className="d-flex justify-content-center">
                  <a href={project.webAddress} title={`${project.appName} opens on a new page`} target="_blank" className="btn">Visit Site</a>
              </div>
          </div>
        </div>
    </div>
      </Reveal>
    ))}
    </>
  )
}

export default ProjectCard
