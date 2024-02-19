"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import "./index.css";

export default function Looper({ speed, direction, children }){
    const [looperInstance, setLooperInstance] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);


    function resetAnimation() {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "false");
    
          setTimeout(() => {
            if (innerRef?.current) {
              innerRef.current.setAttribute("data-animate", "true");
            }
          }, 50);
        }
      }

    const setupInstances = useCallback(() => {
        if(!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();
        const { width: parentWidth } = outerRef.current.getBoundingClientRect();
        const instanceWidth = width / innerRef.current.children.length;
        if (width < parentWidth + instanceWidth) {
            setLooperInstance(looperInstance + Math.ceil(parentWidth / width));
        }
        resetAnimation();
    }, []);




    useEffect(() => setupInstances(), [setupInstances]);

    useEffect(() => {
      window.addEventListener("resize", setupInstances);
  
      return () => {
        window.removeEventListener("resize", setupInstances);
      };
    }, [setupInstances]);

    return (
        <div className="looper" ref={outerRef}>
          <div className="looper__innerList" ref={innerRef}>
            {[...Array(looperInstance)]?.map((_, ind) => (
              <div
                key={ind}
                className="looper__listInstance"
                style={{
                  animationDuration: `${speed}s`,
                  animationDirection: direction === "right" ? "reverse" : "normal",
                }}
              >
                {children}
              </div>
            ))}
          </div>
        </div>
      );
}