import React from 'react'
import { Link } from "react-router-dom";

export default function FormMessage(props) {
    return (
        <div>
            {/* <span class="form-msg">{props.type==="register"? "Have an account?" :"Don't have an account?"} <Link href='/'> {props.type==="register"?"Login":"Sign up"} </Link></span> */}
            {props.type==="register" ?
            (<span class="form-msg"> Have an account<Link to='/'> Login</Link></span>):
            (<span class="form-msg"> Don't have an account?<Link to='/register'> Sign up</Link></span>)
            }
        </div>
    )
}
