import Note from "./Note";

export default function NoteList({ notes, updateNote, removeNote }) {
    return (
        <div className="note-page" id="note-page-1">
            {notes.map((note) => {
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
            })}
        </div>
    );
}