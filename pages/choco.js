import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'
import ChocoForm from '../components/choco-form'

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

      <h1>Contribute!</h1>

      <div className="explanation">

        <p>Do you have a friend who seems really stressed out? Join the Choco Project today and help them out!</p>

        <p>Message us with the locker number of someone who might need cheering up. After receiving requests, we will deliver chocolates to everyone whose locker numbers have been submitted, along with an encouraging note.</p>

        <p><i>The Choco Project will only run for two weeks, starting from XX. Please submit your request before we deliver the chocolates on XX!</i></p>

      </div>

      <ChocoForm />

    </Content>

    <style jsx>{`
      .choco {
        background: #2254ab;
        width: 100vw;
        height: 100%;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }

      .explanation {
        margin-bottom: 5vh;
      }
      
    `}</style>

  </div>
)

export default Choco