import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/SignUp'>SignUp</Link></li>
        </ul>
      </nav>
      <h1>Home</h1>
    </div>
  )
}

export default Home