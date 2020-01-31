import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const sidebar = {
  open: {
    clipPath: `inset(0 0 0 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    clipPath: `inset(0 0 77.5% 0)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const HelpContact = props => {

  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null);

  return (

    <motion.div 
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="help"
    >
      <motion.button 
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
        variants={sidebar}
        className="contacts"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ul>
          <h1>How can I get help?</h1>
          <p>School Counsellors</p>
          <li>Panda Lee</li>
          <li>Samantha Yip</li>
          <li>Gillian Cheung</li>
          <p>Hotlines</p>
          <li>24/7 Suicide Prevention: 2382 0000</li>
          <li>Youth Outreach: 9088 1023</li>
        </ul>
      </motion.button>

      <style>{`

        .help {
          width: 100%;
          height: 10vh;
          border-radius: 0 0 20px 20px;
          background-color: black;
        }

        .contacts {
          width: 100%;
          height: 35vh;
          margin: 0 auto;
          border-radius: 0 0 20px 20px;
          background-color: black;
          color: white;
          padding: 20px;
          padding-top: 0;
          border: 0;
        }

        ul {
          text-align: center;
          padding: 0;
        }

        ul h1 {
          font-size: 22px;
          padding-top: 5px;
        }

        li {
          list-style-type: none;
          font-size: 18px;
        }

        .contacts p {
          font-size: 20px;
          font-weight: bold;
          color: #f5c842;
          margin-bottom: 5px;
        }

      `}</style>
          
    </motion.div>
  )
}

export default HelpContact