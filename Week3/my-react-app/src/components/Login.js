import { Link } from 'react-router-dom'
import React, { useState } from 'react';


function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!name) newErrors.name = 'Name is required'
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div>
      <nav>
          <a className='li'><Link to='/Login' className='Link first'>Login</Link></a>
          <a className='li'><Link to='/SignUp' className='Link'>SignUp</Link></a>
      </nav>
       <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label for="name">Name</label>
        <input name='name' type='text' placeholder='Enter your name' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <label for="email">Email</label>
        <input name='email' type='email' placeholder='Enter your email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <label for="password">Password</label>
        <input name='password' type='text' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <button className='button'>Login</button>
      </form>
    </div>
  )
}

export default Login