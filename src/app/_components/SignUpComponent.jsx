import React, { useState } from 'react'
import "./Login.css"
import "./Signup.css"
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [restaurantName, setRestaurantName] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")

    const [error, setError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSignup = async () => {

        if (!email || !restaurantName || !confirmPassword || !password || !contact || !city || !address || !password) {
            toast.error("All Fields are Required !", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message",
            });
            return false
        } else if (password !== confirmPassword) {
            toast.error("Password and confirm do not match !", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message",
            });
            return false

        }

        try {
            let response = await fetch("http://localhost:3000/api/restaurents", {
                method: "POST",
                body: JSON.stringify({ email, password, confirmPassword, restaurantName, city, address, contact })
            })
            response = await response.json()
           
            if (response.success) {
                console.log(response);
                const { result } = response
                delete result.password
                localStorage.setItem("RestuarentUser", JSON.stringify(result))
                router.push("/restaurent/dashboard")
            }
        } catch (error) {
            toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message",
            });
        }




    }
    return (
        <div className='login-design-signup'>
            <ToastContainer />
            <h1 style={{ marginBottom: "15px" }}>SignUp</h1>
            <div className='login-input'>
                <input type='text' placeholder='Enter Restaurent Name' className='input-text' onChange={(e) => setRestaurantName(e.target.value)} />
                <input type='text' placeholder='Enter Email Id' className='input-text' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Enter Password' className='input-text' onChange={(e) => setPassword(e.target.value)} />
                <input type='password' placeholder='Confirm Password' className='input-text' onChange={(e) => setConfirmPassword(e.target.value)} />
                <input type='text' placeholder='Enter City' className='input-text' onChange={(e) => setCity(e.target.value)} />
                <input type='text' placeholder='Enter Full Address' className='input-text' onChange={(e) => setAddress(e.target.value)} />
                <input type='text' placeholder='Enter Contact No' className='input-text' onChange={(e) => setContact(e.target.value)} />
                <button onClick={() => handleSignup()} >Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp