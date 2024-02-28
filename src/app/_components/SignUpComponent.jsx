import React from 'react'
import "./Login.css"
import "./Signup.css"
const SignUp = () => {
    return (
        <div className='login-design-signup'>
            <h1 style={{marginBottom:"15px"}}>SignUp</h1>
            <div className='login-input'>
                <input type='text' placeholder='Enter Email Id' className='input-text' />
                <input type='password' placeholder='Enter Password'  className='input-text'/>
                <input type='password' placeholder='Confirm Password'  className='input-text'/>
                <input type='text' placeholder='Enter Restaurent Name' className='input-text' />
                <input type='text' placeholder='Enter City' className='input-text' />
                <input type='text' placeholder='Enter Full Address'  className='input-text'/>
                <input type='text' placeholder='Enter Contact No' className='input-text' />
                <button >Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp