import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'

const SelfCare = () => (
  <div className="self-care">
    <Head>
      <title>Self Care</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NormalNav>
      <h1>Self Care</h1>
    </NormalNav>

    <Content>
      depression test, contact
    </Content>

    <style jsx>{`
      .self-care {
        background: #DCDCD2;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }
      
    `}</style>
  </div>
)

export default SelfCare