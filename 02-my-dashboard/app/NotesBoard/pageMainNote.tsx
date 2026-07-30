"use client";

import { useState } from "react";
import AddNote from "./components/AddNote";
import DeleteNote from "./components/DeleteNote";

export type Note = {
  id: string;
  title: string;
  body: string;
  date: string;
};

export const PageMainNote = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAddNote = (title: string, body: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      body,
      date:
        "Hoy · " +
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <>
      <AddNote onAddNote={handleAddNote} />

      <ul className="mt-8 space-y-4">
        {notes.map((note) => (
          <li
            key={note.id}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 pl-7 shadow-(--shadow-paper) transition hover:-translate-y-0.5"
          >
            <span className="absolute inset-y-0 left-0 w-1.5 bg-blue-500" />
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="font-serif text-lg text-card-foreground">
                  {note.title}
                </h2>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                  {note.date}
                </p>
                {note.body && (
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-card-foreground/80">
                    {note.body}
                  </p>
                )}
              </div>
              <DeleteNote noteId={note.id} onDelete={handleDeleteNote} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
