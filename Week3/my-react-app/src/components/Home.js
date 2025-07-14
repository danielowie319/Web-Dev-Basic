import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav>
            <a><Link to='/Login' className='Link first'>Login</Link></a>
            <a><Link to='/SignUp' className='Link'>SignUp</Link></a>
      </nav>
      <h1>Welcome</h1>
      <p>Click Login if you have an account.</p>
      <p>Click SignUp if you don't have one</p>
    </div>
  )
}

export default Home