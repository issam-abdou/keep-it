import React from 'react'

export default function NoteInput() {
    return (
        <div className='note-inputs'>
            <form>
                <input type="text" name="title" id="title" placeholder="Title"/>
                {/* <input type="text" name="content" id="note-content" placeholder="Take a note"/> */}
                <textarea rows = "2" cols="23" name = "content" id="note-content" placeholder='Take a note'></textarea>
            </form>
            <div className='note-actions'>
                <button className='img-icon'><i class="far fa-image"></i></button>
                <button className='add-icon'><i class="fas fa-plus "></i></button>
            </div>
        </div>
    )
}
