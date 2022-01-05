import React from 'react'
import Form from './Form'
import hero from "../img/undraw_uploading_re_okvh.svg"


export default function RegisterGrid(props) {
    return (
        <div>
            <div class="register">
                <div class="register__img">
                    <img src={hero} alt=""/>
                </div>
                <div class="register__text">
                    <div class="register__info">
                        {/* <h3>Hello !</h3>
                        <span class="register__msg">Sign Up To Get Started</span> */}
                        <Form type={props.type}/>
                        {/* <form action="" class="register__form">
                            <div class="form-input">
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
                            <button type="submit" class="btn">Register</button>
                        </form>
                        <span class="form-msg">Have an account? <a href="/">Log in </a> </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
