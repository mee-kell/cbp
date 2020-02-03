import * as React from "react";
import Checkup from './checkup'
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const sidebar = {
  open: {
    clipPath: `inset(0 0 0 0)`,
    transition: {
      type: "spring",
      duration: 2
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

const Help = props => {

  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null);

  return (

    <div>

      <Checkup />

      <motion.button
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="contacts"
      >
        <ul>
          <h1>How can I get help?</h1>
          <p>School Counsellors</p>
          <li>Panda Lee: B505</li>
          <li>Samantha Yip: B504</li>
          <li>Gillian Ip: B507</li>
          <p>Hotlines</p>
          <li>24/7 Suicide Prevention: 2382 0000</li>
          <li>Youth Outreach: 9088 1023</li>
        </ul>

        <style>{`

        .contacts {
          display: block;
          width: 79vw;
          height: 25vh;
          min-height: 260px;

          margin: 0 auto;
          background-color: black;
          color: white;
          
          padding: 10px;
          padding-top: 0;
          border: 0;
          border-radius: 0 0 20px 20px;

          clip-path: inset(0 0 77.5% 0);
          transition: clip-path 1s;
        }

        .contacts:hover, .contacts:active, .contacts:visited {
          clip-path: inset(0 0 0 0);
          transition: clip-path 1s;
        }

        ul {
          text-align: center;
          padding: 0;
        }

        ul h1 {
          font-size: 22px;
        }

        li {
          list-style-type: none;
          font-size: 15px;
        }

        .contacts p {
          font-size: 17px;
          font-weight: bold;
          color: #f5c842;
          margin-bottom: 5px;
        }

      `}</style>

      </motion.button>

    </div>
  )
}

export default Help