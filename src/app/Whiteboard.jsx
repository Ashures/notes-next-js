"use client";

import { useEffect, useState, useMemo } from "react";
import NoteList from "./NoteList"

export default function Whiteboard() {
    const [notes, setNotes] = useState(() => {
        if (typeof window !== 'undefined') {
            const items = localStorage.getItem("NOTES");
            if (items === null) return [];
            return JSON.parse(items);
        }
    });
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        localStorage.setItem("NOTES", JSON.stringify(notes));
    }, [notes]);

    function addNote() {
        setNotes((currentNotes) => {
            return [
                ...currentNotes,
                {
                    id: crypto.randomUUID(),
                    title: '',
                    text: ''
                }
            ];
        })
    }

    function updateNote(newNote) {
        const notesList = notes.map((n) => {
            if (n.id === newNote.id) {
                return newNote;
            }
            return n;
        });

        setNotes(notesList);
    }

    function removeNote(id) {
        setNotes(currentNotes => {
            return currentNotes.filter(note => note.id !== id);
        })
    }

    function changePage(offset) {
        if ((currentPage + offset) * 4 >= 0 && (currentPage + offset) * 4 < notes.length + 4) {
            setCurrentPage((page) => page + offset);
        } 
    }

    return (
        <div className="white-board">
            <NoteList notes={notes} addNote={addNote} currentPage={currentPage} updateNote={updateNote} removeNote={removeNote} />
            <div className="notes-buttons note-shadow">
                
                <div className="change-page">
                    <button onClick={() => changePage(-1)} className="custom-btn" id="page-left">{"<"}</button>
                    <div id="note-page-count">{currentPage + 1}</div>
                    <button onClick={() => changePage(1)} className="custom-btn" id="page-right">{">"}</button>
                </div>
            </div>
        </div>
    );
}