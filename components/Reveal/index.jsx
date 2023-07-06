import React, {  useRef } from 'react';
import { motion, useInView } from "framer-motion"

const Reveal = ({ children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
  return (
        <motion.div className=''
         ref={ref} initial='hidden' animate={isInView ? "visible" : "hidden"}
        variants={
            {
                hidden: { opacity: 0, x: -75},
                visible: { opacity: 1, x: 0}
            }}
            transition={{ duration: 0.9}}
            >
                {children}
            </motion.div>

  )
}

export default Reveal