"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import './Header.css'



const Header = () => {
    const router = useRouter()
    const pathName = usePathname()
    const [details, setDetails] = useState()


    useEffect(() => {
        let data = localStorage.getItem("RestuarentUser")
        if (!data && pathName == "/restaurent/dashboard") {
            router.push("/restaurent")
        }
        else if (data && pathName == "/restaurent") {
            router.push("/restaurent/dashboard")
            
        }
        else {
            setDetails(JSON.parse(data))
        }
    }, [])


    const logout = () => {
        localStorage.removeItem("RestuarentUser")
        router.push("/restaurent")
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0px 100px", borderBottom: "2px solid #D3D3D3" }}>
            <div>
                <Image src={Logo} width={90} height={90} />
            </div>
            <div>
                <ul style={{ display: "flex", gap: "30px" }}>
                    <li style={{ textDecoration: "none", listStyle: "none", cursor: "pointer" }}>Home</li>
                    {
                        details && details.restaurantName ?
                            <>
                                <li style={{ textDecoration: "none", listStyle: "none", cursor: "pointer" }}>Profile</li>
                                <button  style={{cursor:"pointer"}} className='button-logout' onClick={() => logout()}>Logout</button>
                            </>
                            : <li style={{ textDecoration: "none", listStyle: "none", cursor: "pointer" }}>SignUp/Login</li>
                    }
                </ul>
            </div>
        </div>
    )

}

export default Header