import React from 'react';
import { motion } from 'framer-motion'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'
import RatingPage from '../components/ratings/ratingPage'

const About = () => (
  <div className="about">
    <Head>
      <title>About</title>
      <meta name="description" content="Find out more about Code Blue."></meta>
      <meta name="theme-color" content="#26A8E2" />
      <link rel="icon" href="public/logo.png" />
      <link rel="apple-touch-icon" href="public/logo.png"></link>
      <link rel="manifest" href="manifest.webmanifest" />
    </Head>

    <NormalNav>
      About Us
    </NormalNav>

    <Content>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1.5 }}>
        <h2>Welcome to Code Blue, our 2020 CAS Project.</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 2.5 }}>
        <p>Code Blue is a mental health app for YC students, aimed at alleviating academic stress and raising awareness about mental health.</p>
        <p><b>This app was designed so that you can add it to your home screen.</b></p>
        <p>Code Blue was created by Michelle Lo, Beverly Law, Carmen Vidal Cano and Leyla Ozcan.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6, duration: 2 }}>
        <h3>Please give us feedback!</h3>
        <p>We would like to hear your opinion about this app.</p>
        <RatingPage />
      </motion.div>

      <br />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8, duration: 1 }}>
        <h3>Acknowledgements</h3>
        <p>Thanks to Mr Colonel for helping us record meditation sessions.</p>
      </motion.div>

    </Content>

    <style jsx>{`
      .about {
        background: #26A8E2;
        width: 100vw;
        height: 100%;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }
    `}</style>
  </div>
)

export default About