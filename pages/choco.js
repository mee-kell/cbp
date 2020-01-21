import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'

const Choco = () => (
  <div className="choco">
    <Head>
      <title>Contribute</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NormalNav>
      <h1>Choco Project</h1>
    </NormalNav>

    <Content>
      choco project
    </Content>

    <style jsx>{`
      .choco {
        background: #2A4C58;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }
      
    `}</style>
  </div>
)

export default Choco