import React from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head'
import HomeNav from '../components/home-nav'

class Home extends React.Component {

  componentDidMount() {

    window.addEventListener('load', () => {
      registerSW();
    });

    async function registerSW() {
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('sw.js');
        } catch (e) {
          console.log(`SW registration failed`);
        }
      }
    }

  }

  render() {
    return (
      <div className="home">
        <Head>
          <title>Home</title>
          <meta name="description" content="A mental health app designed for YC students."></meta>
          <meta name="theme-color" content="#26A8E2" />
          <link rel="icon" href="public/logo.png" />
          <link rel="apple-touch-icon" href="public/logo.png" />
          <link rel="manifest" href="manifest.webmanifest" />
        </Head>

        <HomeNav />

        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        >
          <div className="menu">

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
              <a href="/relax" className="card" id="relax">
                <h3>Relax</h3>
                <p>Meditate and unwind.</p>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
              <a href="/schedule" className="card" id="schedule">
                <h3>Schedule</h3>
                <p>Organise your time wisely.</p>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
              <a href="/self-care" className="card" id="self-care">
                <h3>Well-being</h3>
                <p>Check your mental health.</p>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
              <a href="/choco" className="card" id="choco">
                <h3>Contribute</h3>
                <p>Join the Choco Project.</p>
              </a>
            </motion.div>

          </div>

        </motion.div>

        <style jsx>{`
      .home {
        background: #26A8E2;
        width: 100vw;
        height: 100vh;
        min-height: 600px;
        margin: 0 auto;
        overflow-x: hidden;
      }
      .menu {
        height: 78vh;
        min-height: 600px;
        background: white;
        padding-top: 5vh;
        padding-bottom: 5vh;
        border-radius: 30px 30px 0 0;
      }
      .card {
        padding: 20px;
        width: 75vw;
        min-width: 250px;
        height: 12vh;
        min-height: 80px;
        margin: auto;
        margin-bottom: 30px;
        display: block;
        text-align: left;
        text-decoration: none;
        color: #434343;
        background: white;
        border-radius: 15px;
      }
      #relax {
        background: #42c8f5;
      }
      #schedule {
        background: #f56942;
      }
      #self-care {
        background: #f5c842;
      }
      #choco {
        background: #2254ab;
        color: whitesmoke;
      }
      .card h3 {
        margin: 0;
        font-size: 35px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 18px;
      }
    `}</style>

      </div>
    )
  }
}

export default Home