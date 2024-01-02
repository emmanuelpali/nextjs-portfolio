import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import './index.css'


export default function Contact(){
  const date = new Date();
  return (
    <div className='page-footer row text-center mx-auto'>
      <h2 className='mb-5'>Contact Me</h2>
      <a className="col-md-3  contact-kids" title={`opens on a new page`} target="_blank" href='https://www.linkedin.com/in/emmanuelpaliwebdeveloper/'>
        <div >       
            <FaLinkedinIn />
            <p>LinkedIn</p>
        </div>
       </a>       
       <a className="col-md-3  contact-kids" title={`opens on a new page`} target="_blank" href='mailto:emmanuel@paliemmanuel.com'>
          <div >
            <MdEmail />
            <p>Email</p>
          </div>
       </a>       
        <a className="col-md-3  contact-kids" title={`opens on a new page`} target="_blank" href='https://github.com/emmanuelpali'>
        <div >
          <FaGithub />
          <p>GitHub</p>
        </div>
       </a>
      <div className="copy mt-4">
      Emmanuel Pali &#169; {date.getFullYear()}
      </div>
    </div>
  )
}
