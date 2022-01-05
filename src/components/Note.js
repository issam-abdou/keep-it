import React from 'react'
import noteImg from "../img/note-img.jpg"
export default function Note() {
    return (
        <div className='note'>
            <img src={noteImg} alt="note" className='note__img'/>
            <div className='note__text'>
                <h3>New Trip</h3>
                <p>facilis quia itaque optio cr in unde culpa! acilis!que optio  in</p>
            </div>
        </div>
        
    )
}
