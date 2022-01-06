import React from 'react'
import Form from './Form'
import hero from "../img/undraw_uploading_re_okvh.svg"


export default function RegisterGrid(props) {
    return (
        <div>
            <div className="register">
                <div className="register__img">
                    <img src={hero} alt=""/>
                </div>
                <div className="register__text">
                    <div className="register__info">
                        <Form type={props.type}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
