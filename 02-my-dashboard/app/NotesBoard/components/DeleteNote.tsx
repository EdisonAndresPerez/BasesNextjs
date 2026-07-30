"use client";

import { BsTrash2 } from "react-icons/bs";

type DeleteNoteProps = {
  noteId: string;
  onDelete: (id: string) => void;
};

export default function DeleteNote({ noteId, onDelete }: DeleteNoteProps) {
  return (
    <button
      onClick={() => onDelete(noteId)}
      aria-label="Eliminar nota"
      className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:border-destructive hover:text-destructive"
    >
      <BsTrash2 className="size-4" />
    </button>
  );
}
