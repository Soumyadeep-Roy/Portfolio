import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer_section'>
      <div className='src_code'>
      Check out the source code here : <a href='https://github.com/Soumyadeep-Roy/Portfolio' target="_blank">Link</a>
      </div>
      <div className='top'>
      Go to  <HashLink smooth to="/#home"><a>Top</a></HashLink>
      </div>
    </div>
  )
}

export default Footer
