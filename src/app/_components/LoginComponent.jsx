import React from 'react'
import "./Login.css"
const Login = () => {
    return (
        <div className='login-design'>
            <h1>Login</h1>
            <div className='login-input'>
                <input type='text' placeholder='Email Id' className='input-text' />
                <input type='password' placeholder='Password'  className='input-text'/>
            </div>
        </div>
    )
}

export default Login