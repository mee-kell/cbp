import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'

const Schedule = () => (
  <div className="schedule">
    <Head>
      <title>Schedule</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NormalNav>
      <h1>Schedule</h1>
    </NormalNav>

    <Content>
      pomodoro timer, deadline setter
    </Content>

    <style jsx>{`
      .schedule {
        background: #E89492;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }
      
    `}</style>
  </div>
)

export default Schedule