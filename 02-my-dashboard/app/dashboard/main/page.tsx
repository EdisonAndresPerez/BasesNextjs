"use client";

import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";

type Note = {
  id: string;
  title: string;
  body: string;
  date: string;
};

const initialNotes: Note[] = [];

export default function NamePage() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddNote = () => {
    if (!title.trim() || !body.trim()) return;

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

    // Limpiar los inputs
    setTitle("");
    setBody("");
  };

  const removeNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14">
      <header className="mb-10 flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <LuNotebookPen className="size-5" />
        </span>
        <div>
          <h1 className="font-serif text-3xl leading-none tracking-tight text-foreground">
            Mi diario
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Anota lo que pasó, lo que pensaste o lo que no quieres olvidar.
          </p>
        </div>
      </header>

      <section className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-paper)]">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la nota"
          className="w-full bg-transparent font-serif text-xl text-card-foreground outline-none placeholder:text-muted-foreground/60"
        />
        <div className="my-3 h-px bg-border" />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={3}
          placeholder="Escribe aquí lo que quieras recordar..."
          className="w-full resize-none bg-transparent text-sm leading-relaxed text-card-foreground outline-none placeholder:text-muted-foreground/60"
        />
        <div className="mt-3 flex justify-end">
          <button
            onClick={handleAddNote}
            // disabled={!canAdd}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
          >
            <BiPlus className="size-4" />
            Agregar nota
          </button>
        </div>
      </section>

      <ul className="mt-8 space-y-4">
        {notes.map((note) => (
          <li
            key={note.id}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 pl-7 shadow-[var(--shadow-paper)] transition hover:-translate-y-0.5"
          >
            <span className="absolute inset-y-0 left-0 w-1.5 bg-accent" />
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
              <button
                onClick={() => removeNote(note.id)}
                aria-label="Eliminar nota"
                className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:border-destructive hover:text-destructive"
              >
                <BsTrash2 className="size-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
