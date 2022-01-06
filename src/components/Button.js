import React from 'react'
import { Link } from "react-router-dom";

export default function Button(props) {
    return (
        <Link to="/user" className='btn' onClick={()=>{console.log('clicked ++++++++')}}><button type="submit" className=''>{props.type==="register"?"Register":"Login"}</button></Link>
        
    )
}
