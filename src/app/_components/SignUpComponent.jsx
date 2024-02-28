import React from 'react'
import "./Login.css"
import "./Signup.css"
const SignUp = () => {
    return (
        <div className='login-design-signup'>
            <h1>SignUp</h1>
            <div className='login-input'>
                <input type='text' placeholder='Email Id' className='input-text' />
                <input type='password' placeholder='Password'  className='input-text'/>
                <input type='text' placeholder='Email Id' className='input-text' />
                <input type='password' placeholder='Password'  className='input-text'/>
                <input type='text' placeholder='Email Id' className='input-text' />
                <input type='password' placeholder='Password'  className='input-text'/>
                <input type='text' placeholder='Email Id' className='input-text' />
                <input type='password' placeholder='Password'  className='input-text'/>
                
            </div>
        </div>
    )
}

export default SignUp