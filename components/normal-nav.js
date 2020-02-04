import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NormalNav = props => (
  <nav>
    <ul>
      <li>
        <motion.div whileHover={{ rotate: 720 }} whileTap={{ rotate: 720 }} transition={{ duration: 0.8 }}>
          <Link href="/">
            <a><img src="/logo.png" /></a>
          </Link>
        </motion.div>
      </li>
      <li>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
            <h1>{props.children}</h1>
        </motion.div>
        </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        max-width: 600px;
      }
      img {
        height: 6vh;
        margin-top: 2vh;
      }
      nav {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 2vh;
        height: 10vh;
        background: rgb(0,0,0,0);
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 4px 16px;
        padding-right: 0;
        align-items: center;
      }
      li {
        display: flex;
        align-content: center;
      }
      h1 {
        padding-right: 5vw;
        text-align: right;
        color: white;
        background: black;
        height: 7vh;
        width: 66vw;
        line-height: 7vh;
        margin: 0;
      }
    `}</style>
  </nav>
)

export default NormalNav