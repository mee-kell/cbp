import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'
import Checkup from '../components/checkup/checkup'
import { motion } from 'framer-motion'
import HelpContact from '../components/checkup/helpcontact'

const SelfCare = () => (
  <div className="self-care">
    <Head>
      <title>Well-being</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NormalNav>
      <h1>Well-being</h1>
    </NormalNav>

    <Content>

      <Checkup />

      <HelpContact />
      
    </Content>

    <style jsx>{`
      .self-care {
        background: #f5c842;
        width: 100vw;
        height: 100%;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }

      h1 {
        font-size: 3.5vh;
      }
      
    `}</style>
  </div>
)

export default SelfCare