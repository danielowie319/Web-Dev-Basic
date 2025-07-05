import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/SignUp'>SignUp</Link></li>
        </ul>
      </nav>
      <h1>SignUp</h1>
    </div>
  )
}

export default SignUp