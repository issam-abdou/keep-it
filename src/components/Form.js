import React from 'react'
import FormMessage from './FormMessage'
export default function Form(props) {
    return (
        <>
            <h3>{props.type==="register"? "Hello!" : "Hello again!"}</h3>
            <span class="register__msg">{props.type==="register"? "Sign Up To Get Started" : "Welcome back"}</span>
            <form action="" class="register__form">
                <div class="form-input" style={props.type==="register"?{display:"block"}:{display:"none"}}>
                    <span class="input-icon"><i class="fas fa-user"></i></span>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div class="form-input">
                    <span class="input-icon"><i class="far fa-envelope"></i></span>
                    <input type="email" name="email" id="email" placeholder="Email addresse"/>    
                </div>
                <div class="form-input">
                    <span class="input-icon"><i class="fas fa-lock"></i></span>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <button type="submit" class="btn">{props.type==="register"?"Register":"Login"}</button>
                <FormMessage type={props.type}/>
            </form>
        </>
        
    )
}
