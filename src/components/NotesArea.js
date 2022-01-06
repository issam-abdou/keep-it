import React from 'react'
import NoteGrid from './NoteGrid'
import NoteInput from './NoteInput'

export default function NotesArea(props) {
    // Update Notes : Add new Note
    function updateUser(newNote) {
        props.updateUserParent(newNote)
    }
    // Update Notes : Delete Note
    function updateDelete(noteToDeleteId) {
        props.deleteUpdate(noteToDeleteId)
    }
    return (
        <div className='note-area'>
            <div className='container'>
                <NoteInput updateParent={updateUser}/>
                <NoteGrid notes = {props.notes} updateDelete={updateDelete}/>
            </div>
        </div>
    )
}
