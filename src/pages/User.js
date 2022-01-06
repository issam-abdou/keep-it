import React,{useState} from 'react'
import Header from '../components/Header'
import NotesArea from '../components/NotesArea'

export default function User() {
    const[notes,setNotes]= useState([])
    // Add new note
    function addNote(newNote) {
        setNotes((prevNote)=>{
            return [...prevNote,newNote]
        })
    }
    // Delete a note
    function deleteNote(noteToDeleteId) {
        setNotes((prevNote)=>{
            return prevNote.filter((note,index)=>{
                return index!== noteToDeleteId
            })
        })
    }
    return (
        <div className='user'>
            <Header/>
            <NotesArea updateUserParent={addNote} notes={notes} deleteUpdate={deleteNote}/>
        </div>
    )
}
