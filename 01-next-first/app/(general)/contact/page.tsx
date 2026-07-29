import { Metadata } from "next";




export const metadata: Metadata = {
 title: 'contactos',
 description: 'Contactos de la pagina',
  keywords: ['contactos', 'Edison Perez'],
};


export default function AboutPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Contacto</h1>
      <p className="text-lg leading-8 text-white-600">
        Esta es la página Contacto de mi aplicación.
      </p>
    </>
  )
}
