import React from 'react'
import Note from './Note'
export default function NoteGrid(props) {
    function updateDelete(noteToDeleteId) {
        props.updateDelete(noteToDeleteId)
    }
    return (
        <div className='note-grid'>
            {props.notes?props.notes.map((note,index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} updateDelete={updateDelete}/>
            }):null}
        </div>
    )
}
