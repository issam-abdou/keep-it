import React from 'react'
import logo from "../img/Keep it.svg"
export default function Logo() {
    return (
        <a href='/'>
            <div className="logo">
                <img src={logo}  alt="logo"/>
            </div>
        </a>
    )
}
