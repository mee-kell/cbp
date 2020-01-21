import React from 'react'
import Link from 'next/link'

const HomeNav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a><img src="/logo.png" /></a>
        </Link>
      </li>
      <li>
        <p id="welcome">Code Blue</p>
      </li>
      <li>
        <Link href="/about">
          <a id="about-text">About</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Avenir Next, sans-serif;
        max-width: 600px;
      }
      img {
        height: 6vh;
      }
      nav {
        text-align: center;
        margin: 0;
        background: #26A8E2;
        border: 1px #26A8E2 solid;
        height: 10vh;
        margin-bottom: 1vh;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        min-width: 20vw;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 20px;
      }
      #about-text {
        position: absolute;
        top: 4vh;
        right: 20px;
      }
      #welcome {
        display: inline-block:
        text-align: center;
        font-size: 30px;
        margin-top: 3px;
        color: white;
        font-weight: bold;
      }
    `}</style>
  </nav>
)

export default HomeNav
