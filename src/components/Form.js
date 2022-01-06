import React from 'react'
import FormMessage from './FormMessage'
import Button from './Button'
export default function Form(props) {
    return (
        <>
            <h3>{props.type==="register"? "Hello!" : "Hello again!"}</h3>
            <span className="register__msg">{props.type==="register"? "Sign Up To Get Started" : "Welcome back"}</span>
            <form action="" className="register__form">
                <div className="form-input" style={props.type==="register"?{display:"block"}:{display:"none"}}>
                    <span className="input-icon"><i className="fas fa-user"></i></span>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div className="form-input">
                    <span className="input-icon"><i className="far fa-envelope"></i></span>
                    <input type="email" name="email" id="email" placeholder="Email addresse"/>    
                </div>
                <div className="form-input">
                    <span className="input-icon"><i className="fas fa-lock"></i></span>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                {/* <button type="submit" className='btn'>
                <Link to="/user" className='btn' onClick={()=>{console.log('clicked ++++++++')}}>{props.type==="register"?"Register":"Login"}</Link>
                </button> */}
                {/* <Link to="/user" className='btn' onClick={()=>{console.log('clicked ++++++++')}}><button type="submit" className=''>{props.type==="register"?"Register":"Login"}</button></Link> */}
                <Button type={props.type}/>
                {/* <Link to="/user" className='btn' onClick={()=>{console.log('clicked ++++++++')}}>{props.type==="register"?"Register":"Login"}</Link> */}
            </form>
            <FormMessage type={props.type}/>
        </>
        
    )
}
