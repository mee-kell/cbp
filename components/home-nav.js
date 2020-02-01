import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HomeNav = () => (
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
        <p id="welcome">Code Blue</p>
      </li>
      <li>
        <Link href="/about">
          <a id="about-text">About</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Avenir Next, sans-serif;
        max-width: 600px;
      }
      img {
        height: 6vh;
        min-height: 40px;
      }
      nav {
        text-align: center;
        margin: 0;
        background: #26A8E2;
        border: 1px #26A8E2 solid;
        height: 10vh;
        min-height: 80px;
        margin-bottom: 1vh;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        min-width: 20vw;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 20px;
      }
      a:hover, a:active {
        color: black;
      }
      #about-text {
        position: relative;
        top: 10px;
        right: -10px;
      }
      #welcome {
        display: inline-block:
        text-align: center;
        font-size: 30px;
        margin-top: 3px;
        color: white;
        font-weight: bold;
      }
    `}</style>
  </nav>
)

export default HomeNav
