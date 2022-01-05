import React from 'react'
import NoteGrid from './NoteGrid'
import NoteInput from './NoteInput'

export default function NotesArea() {
    return (
        <div className='note-area'>
            <div className='container'>
                <NoteInput/>
                <NoteGrid/>
            </div>
        </div>
    )
}
