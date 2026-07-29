import { Metadata } from "next";

export const metadata: Metadata = {
  title: "precios",
  description: "Precios de la pagina",
  keywords: ["precios", "Edison Perez"],
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Precios</h1>
      <p className="text-lg leading-8 text-white-600">
        Esta es la página Contacto de mi aplicación.
      </p>
    </>
  );
}
