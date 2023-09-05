import Note from "./Note";

export default function NoteList({ notes, currentPage, addNote, updateNote, removeNote }) {
    return (
        <div className="note-page">
            <button onClick={addNote} className="custom-btn add-btn" id="add-note-btn">+</button>
            {notes.map((note, i) => {
                if (i >= currentPage * 4 && i < (currentPage + 1) * 4) {
                    return (
                        <Note 
                            key={note.id} 
                            id={note.id} 
                            title={note.title} 
                            text={note.text} 
                            updateNote={updateNote}
                            removeNote={removeNote}
                        />
                    );
                }
            })}
        </div>
    );
}