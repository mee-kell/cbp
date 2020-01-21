import React from 'react'
import Head from 'next/head'
import HomeNav from '../components/home-nav'

const Home = () => (
  <div className="home">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomeNav />

    <div className="menu">
      <a href="/relax" className="card" id="relax">
        <h3>Relax</h3>
        <p>Meditate and unwind.</p>
      </a>
      <a href="/schedule" className="card" id="schedule">
        <h3>Schedule</h3>
        <p>Organise your time wisely.</p>
      </a>
      <a href="/self-care" className="card" id="self-care">
        <h3>Self-care</h3>
        <p>Check your mental health.</p>
      </a>
      <a href="/choco" className="card" id="choco">
        <h3>Contribute</h3>
        <p>Join the Choco Project.</p>
      </a>
    </div>

    <style jsx>{`
      .home {
        background: #26A8E2;
        width: 100vw;
        height: 99vh;
        margin: 0 auto;
      }
      .menu {
        height: 78vh;
        background: white;
        padding-top: 5vh;
        padding-bottom: 5vh;
        border-radius: 30px 30px 0 0;
      }
      .card {
        padding: 20px;
        width: 75%;
        min-width: 250px;
        height: 15%;
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
        background: #9CD7EF;
      }
      #schedule {
        background: #E89492;
      }
      #self-care {
        background: #DCDCD2;
      }
      #choco {
        background: #2A4C58;
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

export default Home
