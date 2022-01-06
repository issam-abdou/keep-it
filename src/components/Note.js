import React from 'react'
import noteImg from "../img/note-img.jpg"
export default function Note(props) {

    function handleDelete() {
        props.updateDelete(props.id)
    }
    return (
        <div className='note'>
            <img src={noteImg} alt="note" className='note__img'/>
            <div className='note__text'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
            <div className="note__delete" onClick={handleDelete}><i className="far fa-trash-alt"></i></div>
        </div>
        
    )
}
