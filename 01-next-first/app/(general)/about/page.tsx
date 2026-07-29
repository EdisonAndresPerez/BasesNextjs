import { Metadata } from "next";




export const metadata: Metadata = {
 title: 'Acerca de ',
 description: 'Acerca de ',
 keywords: ['Acerca de', 'Edison Perez', 'Next.js', 'React', 'JavaScript', 'TypeScript', 'Web Development'],
};


export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">Acerca de</h1>
      <p className="text-lg leading-8 text-white-600 ">
        esta es la pagina acerca de mi aplicacion 
      </p>
    </div>
  )
}
