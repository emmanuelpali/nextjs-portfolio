"use client"
import React, { useContext } from 'react'
import { MyContext } from '../../components/Context/MyContext'
import { motion } from 'framer-motion'
import './index.css'

function Cursor() {   
    const {cursorVariants, variants} = useContext(MyContext)

  return (
    <>
        <motion.div 
        className='cursor'
        variants={variants}
        animate={cursorVariants}
        />
    </>
  )
}

export default Cursor