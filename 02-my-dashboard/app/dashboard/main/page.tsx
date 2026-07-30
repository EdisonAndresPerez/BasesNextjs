import { LuNotebookPen } from "react-icons/lu";

import {PageMainNote} from "../../NotesBoard/pageMainNote";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear Notas",
  description: "Crea y gestiona tus notas de manera sencilla.",
};



export default function Page() {
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

      <PageMainNote/>
    </div>
  );
}
