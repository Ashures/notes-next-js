import { useState } from "react";

export default function Note({ id, title, text, updateNote, removeNote }) {
    const [noteTitle, setNoteTitle] = useState(title);
    const [noteText, setNoteText] = useState(text);
    
    return (
        <form className="note note-shadow">
            <button onClick={() => removeNote(id)} className="close-note">X</button>
            <input onChange={(e) => setNoteTitle(e.target.value)} onBlur={() => updateNote({id: id, title: noteTitle, text: noteText})} value={noteTitle} />
            <textarea onChange={(e) => setNoteText(e.target.value)} onBlur={() => updateNote({id: id, title: noteTitle, text: noteText})} value={noteText} />
        </form>
    );
}