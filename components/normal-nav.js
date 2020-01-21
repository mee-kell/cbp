import React from 'react'
import Link from 'next/link'

const NormalNav = props => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a><img src="/logo.png"/></a>
        </Link>
      </li>
      <li className="title">
        <p>{props.children}</p>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        max-width: 600px;
      }
      img {
        height: 6vh;
        margin-top: 2vh;
      }
      nav {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 2vh;
        height: 10vh;
        background: rgb(0,0,0,0);
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
      }
      nav > ul {
        padding: 4px 16px;
        padding-right: 0;
      }
      li {
        display: flex;
      }
      .title {
        margin: 8px;
        margin-right: 0;
        font-size: 3vh;
        color: white;
        background: black;
        height: 8vh;
        width: 66vw;
        display: block;
      }
      p {
        margin-top: -2vh;
        padding-right: 5vw;
        text-align: right;
      }
    `}</style>
  </nav>
)

export default NormalNav