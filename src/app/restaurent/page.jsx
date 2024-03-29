"use client"

import React, { useState } from 'react'
import Login from '../_components/LoginComponent'
import SignUp from '../_components/SignUpComponent'
import './all.css'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import { ToastContainer } from 'react-toastify'
const Restaurent = () => {

    const [login, setLogin] = useState(true)

    return (
        <div className='login-signup-design'>
            <Header/>
            <div className='login-signup-div'>
                {
                    login ? <Login /> : <SignUp />
                }

                <div className='sign-already' >
                    <h6 onClick={() => setLogin(!login)}>{login ? <p>Not have an account? <span>Signup</span></p> :<p>Already have an account? <span>Login</span></p>}</h6>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Restaurent