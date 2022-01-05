import React from 'react'
import RegisterGrid from '../components/RegisterGrid'
//import logo from "../img/Keep it.svg"
// import hero from "../img/undraw_uploading_re_okvh.svg"
import Logo from '../components/Logo'


export default function Login() {
    return (
        <main>
            <Logo/>
            <RegisterGrid type="login"/>
        </main>
    )
}
