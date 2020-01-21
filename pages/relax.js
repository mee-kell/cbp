import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'

const Relax = () => (
  <div className="relax">
    <Head>
      <title>Relax</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NormalNav>
      <h1>Meditation</h1>
    </NormalNav>

    <Content>
      content
    </Content>

    <style jsx>{`
      .relax {
        background: #9CD7EF;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }
      
    `}</style>
  </div>
)

export default Relax