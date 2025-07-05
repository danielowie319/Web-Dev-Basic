import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/SignUp'>SignUp</Link></li>
        </ul>
      </nav>
      <h1>Login</h1>
    </div>
  )
}

export default Login