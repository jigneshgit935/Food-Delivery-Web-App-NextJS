import React from 'react'
import Logo from '../assets/logo.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0px 100px",borderBottom:"2px solid #D3D3D3" }}>
            <div>
                <Image src={Logo} width={90} height={90}/>         
                   </div>
            <div>
                <ul style={{ display: "flex", gap: "30px" }}>
                    <li style={{ textDecoration: "none", listStyle: "none" ,cursor:"pointer"}}>Home</li>
                    <li style={{ textDecoration: "none", listStyle: "none",cursor:"pointer" }}>SignUp/Login</li>
                    <li style={{ textDecoration: "none", listStyle: "none",cursor:"pointer" }}>Profile</li>
                </ul>
            </div>
        </div>
    )

}

export default Header