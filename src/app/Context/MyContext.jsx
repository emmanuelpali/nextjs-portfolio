"use client";
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
	// Define the states
	const [cursorVariants, setCursorVariants] = useState("default");
	const enterText = () => setCursorVariants("text");
	const leaveText = () => setCursorVariants("default");
	const [display, setDisplay] = useState([]);
	const handleDisplay = (id) => {
		if (display.includes(id)) {
			setDisplay(display.filter((itemID) => itemID !== id));
		} else {
			let newDisplayList = [...display];
			newDisplayList.push(id);
			setDisplay(newDisplayList);
		}
	};

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const variants = {
		default: {
			x: mousePosition.x - 15,
			y: mousePosition.y - 15,
		},
		text: {
			height: 50,
			width: 50,
			x: mousePosition.x - 55,
			y: mousePosition.y - 55,
			background: "yellow",
			mixBlendMode: "difference",
		},
	};

	useEffect(() => {
		function mouseMove(e) {
			const { clientX, clientY } = e;
			setMousePosition((prev) => ({
				...prev,
				x: clientX,
				y: clientY,
			}));
		}
		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	// Create any additional functions or logic as needed

	// Prepare the values to be provided by the context
	const contextValues = {
		cursorVariants,
		setCursorVariants,
		enterText,
		leaveText,
		variants,
		display,
		handleDisplay,
	};

	// Provide the context values to the child components
	return (
		<MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
	);
};
