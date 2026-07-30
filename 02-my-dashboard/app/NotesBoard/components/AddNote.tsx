"use client";

import { useState } from "react";
import { BiPlus } from "react-icons/bi";

type AddNoteProps = {
  onAddNote: (title: string, body: string) => void;
};

export default function AddNote({ onAddNote }: AddNoteProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const canAdd = title.trim() !== "" && body.trim() !== "";

  const handleAdd = () => {
    if (!canAdd) return;
    onAddNote(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-(--shadow-paper)">
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
          onClick={handleAdd}
          disabled={!canAdd}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
        >
          <BiPlus className="size-4" />
          Agregar nota
        </button>
      </div>
    </section>
  );
}
