import React from 'react'
import { motion } from 'framer-motion'

const Content = props => (
  <motion.div
    initial={{ y: 500 }}
    animate={{ y: 0 }}
    transition={{ ease: "easeOut", duration: 1.5 }}
  >
  <div>
    {props.children}

    <style jsx>{`
      div {
        height: 85vh;
        background: white;
        padding: 2vh 7vw 0 7vw;
        border-radius: 30px 30px 0 0;
      }
    `}</style>
    
  </div>
  </motion.div>
)

export default Content
