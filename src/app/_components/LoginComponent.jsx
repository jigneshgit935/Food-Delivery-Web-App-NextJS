import React, { useState } from 'react'
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = () => {
        if (!email || !password) {
            toast.error("All Fields are Required !", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message",
            });
            return false
        }
    }

    return (
        <div className='login-design'>
            <ToastContainer/>
            <h1>Login</h1>
            <div className='login-input'>
                <input type='text' placeholder='Email Id' className='input-text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' className='input-text' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login