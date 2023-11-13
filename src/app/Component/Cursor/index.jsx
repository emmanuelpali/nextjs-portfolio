"use client"
import React, { useContext } from 'react'
import { MyContext } from '../../Context/MyContext'
import { motion } from 'framer-motion'
import './index.css'

export default function Cursor() {   
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

