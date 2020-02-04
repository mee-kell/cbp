import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'
import Help from '../components/checkup/helpcontact'

const SelfCare = () => (
  <div className="self-care">
    <Head>
      <title>Well-being</title>
      <link rel="icon" href="public/logo.png" />
      <link rel="manifest" href="manifest.webmanifest" />
    </Head>

    <NormalNav>
      Well-being
    </NormalNav>

    <Content>

      <Help />

    </Content>

    <style jsx>{`
      .self-care {
        background: #f5c842;
        width: 100vw;
        height: 100vh;
        min-height: 600px;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }

      .title {
        position: relative;
        top: 2vh;
      }
      
    `}</style>
  </div>
)

export default SelfCare