"use client"
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
    // Define the states
    const [cursorVariants, setCursorVariants] = useState('default');
    const enterText = () => setCursorVariants("text");
    const leaveText = () => setCursorVariants('default')

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });


    const variants = {
        default: {
            x: mousePosition.x -15,
            y: mousePosition.y -15, 
        },
        text: {
            height: 70,
            width: 70,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            background: "navy-blue",
            mixBlendMode: "difference"
        }
    }


    useEffect(() => {
        function mouseMove(e) {
            const { clientX, clientY } = e; 
            setMousePosition(prev => ({
                ...prev,
                x: clientX,
                y: clientY
            }),[])
        }
        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    })
  
    // Create any additional functions or logic as needed
  
    // Prepare the values to be provided by the context
    const contextValues = {
        cursorVariants,
        setCursorVariants,
        enterText,
        leaveText,
        variants
    };
  
    // Provide the context values to the child components
    return <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>;
  };