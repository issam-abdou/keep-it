import React from 'react'

export default function FormMessage(props) {
    return (
        <div>
            <span class="form-msg">{props.type==="register"? "Have an account?" :"Don't have an account?"} <a href='/'> {props.type==="register"?"Login":"Sign up"} </a></span>
        </div>
    )
}
