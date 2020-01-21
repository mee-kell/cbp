import React from 'react'

const Content = props => (
  <div>
    {props.children}

    <style jsx>{`
      div {
        height: 85vh;
        background: white;
        padding: 2vh 7vw 0 7vw;
        border-radius: 30px 30px 0 0;
      }
    `}</style>
    
  </div>
)

export default Content
