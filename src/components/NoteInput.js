import React,{useState} from 'react'

export default function NoteInput(props) {

    // ============= CREATE NEW NOTE ============
    const [newNote,setNewNote] = useState(
        {title:"",
        content:""
    })
    function handleChange(e) {
        const {title,content}=newNote;
        const {name,value} = e.target;
        if (name==="title") {
            setNewNote({
                title:value,
                content:content
            })
        } else {
            setNewNote({
                title:title,
                content:value
            })
        }
    }
    // ==== Pass the new note to the parent
    function handleAddClick() {
        props.updateParent(newNote)
        setNewNote({
            title:'',
            content:''
        })
    }


    return (
        <div className='note-inputs'>
            <form>
                <input type="text" name="title" value={newNote.title} id="title" placeholder="Title" onChange={handleChange}/>
                <textarea rows = "2" cols="23" name = "content" value={newNote.content} id="note-content" placeholder='Take a note' onChange={handleChange}></textarea>
            </form>
            <div className='note-actions'>
                <button className='img-icon'><i className="far fa-image"></i></button>
                <button className='add-icon' onClick={handleAddClick}><i className="fas fa-plus "></i></button>
            </div>
        </div>
    )
}
