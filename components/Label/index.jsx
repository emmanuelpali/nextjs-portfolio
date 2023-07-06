"use client"
import React, { useContext } from "react";
import { MyContext } from '../../components/Context/MyContext'
import { motion, useScroll } from "framer-motion";
import "./index.css";

export const Label = () => {

  const { enterText, leaveText } = useContext(MyContext)
  return (
    <div className="label">

      <div className="hello-i-m-emmanuel-wrapper">
        <h1 onMouseEnter={enterText} onMouseLeave={leaveText} className="hello-i-m-emmanuel">
          <span className="text-wrapper">
            Hello! <br />
            I’m{" "}
          </span>
          <span className="span">
            Emmanuel Pali
            <br />
          </span>
          <span className="text-wrapper-2">
            A full-stack Developer who enjoys&nbsp;&nbsp;solving business problems and building&nbsp;&nbsp;
            <br />
            aesthetically pleasing user-interfaces
          </span>
        </h1>
      </div>
    </div>
  );
};