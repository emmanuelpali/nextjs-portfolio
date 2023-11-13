import Image from "next/image";
import React, { useContext } from "react";
import Ellipse from "../Ellipse";
import Reveal from '../Reveal'
import data from "../../../../utils/data";
import { MyContext } from "../../Context/MyContext";
import Looper from "../Looper";
import "./index.css";

export default function ProjectCard() {
          const { display, handleDisplay } =  useContext(MyContext)
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
                <button className="btn" onClick={() => handleDisplay(project.id)}>More</button>
                  
              </div>
          </div>
          {display.includes(project.id) && 
          <div className="details">
            <div className="details_contents">
              <Looper speed="22" direction="left">
                {project.pictures.map((image, idx) => (
                  <div className="looper_img" key={idx}><Image className="img-fluid"
                  src={image}
                  alt="Picture of the project"
                  style={{objectFit: "cover"}}
                  /></div>
                ))}
              </Looper>
            </div>
            <div className="looper_links">
                <button className="btn" onClick={() => handleDisplay(project.id)}>Close</button>
                <a href={project.webAddress} title={`${project.appName} opens on a new page`} target="_blank" className="btn">Visit Site</a>
            </div>
          </div>}
        </div>
    </div>
      </Reveal>
    ))}
    </>
  )
}