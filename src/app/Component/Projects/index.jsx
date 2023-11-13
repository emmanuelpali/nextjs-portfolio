import React from 'react';
import ProjectCard from '../ProjectCard'
import "./index.css";

export default function Projects(){
  return (
    <section className=' projects'>
        <div className=""><h2 className='text-center'>My Projects</h2></div>
        <ProjectCard />
    </section>
  )
}
