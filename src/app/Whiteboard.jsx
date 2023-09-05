"use client";

import { useEffect, useState } from "react";
import NoteList from "./NoteList"

export default function Whiteboard() {
    const [notes, setNotes] = useState(() => {
        if (typeof window !== 'undefined') {
            const items = localStorage.getItem("NOTES");
            if (items === null) return [];
            return JSON.parse(items);
        }
    });

    useEffect(() => {
        console.log('notes updated.')
        localStorage.setItem("NOTES", JSON.stringify(notes));
    }, [notes]);

    function addNote() {
        setNotes((currentNotes) => {
            return [
                ...currentNotes,
                {
                    id: crypto.randomUUID(),
                    title: 'test title',
                    text: 'test text'
                }
            ];
        })
    }

    function updateNote(newNote) {
        const newNotes = notes.map((n) => {
            if (n.id === newNote.id) {
                return newNote;
            }
            return n;
        });

        setNotes(newNotes);
    }

    function removeNote(id) {
        setNotes(currentNotes => {
            return currentNotes.filter(note => note.id !== id);
        })
    }

    return (
        <div className="white-board">
            <NoteList notes={notes} updateNote={updateNote} removeNote={removeNote} />
            <div className="add-note note-shadow">
                <button onClick={addNote} className="custom-btn" id="add-note-btn">+</button>
            </div>
            <div className="change-page">
                <button className="custom-btn" id="page-left">{"<"}</button>
                <button className="custom-btn" id="page-right">{">"}</button>
            </div>
        </div>
    );
}