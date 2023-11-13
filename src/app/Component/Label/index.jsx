"use client"
import React, { useContext } from "react";
import { MyContext } from '../../Context/MyContext'
import "./index.css";

export default function Label(){

  const { enterText, leaveText } = useContext(MyContext)
  return (
    <div className="label">

      <div className="hello-i-m-emmanuel-wrapper" onMouseEnter={enterText} onMouseLeave={leaveText}>
        <h1  className="hello-i-m-emmanuel">
          <span className="text-wrapper">
            Hello! <br />
            I’m{" "}
          </span>
          <span className="span">
            Emmanuel Pali
            <br />
          </span>
          <span className="text-wrapper-2">
            A full-stack Developer. 
            <br />
            I build SQL databases, React/JavaScript/Node and ASP.NET applications.
          </span>
        </h1>
      </div>
    </div>
  );
};