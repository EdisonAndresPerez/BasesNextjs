import { Metadata } from "next";
import Link from "next/link";

//mr => crear metadata para SEO
export const metadata: Metadata = {
  title: "About Page",
  description: "About Page Description",
  keywords: [
    "About Page",
    "Edison Perez",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <span className="text-4xl p-2">
        Hola mundo, estoy creando mi primera aplicación con Next.js
      </span>
      <div className="mx-auto max-w-5xl rounded-2xl border p-4">
        <p className="text-lg leading-8 text-white-600">
          Next.js ofrece diferentes estrategias de renderizado para optimizar el
          rendimiento y el SEO de una aplicación.
          <span className="font-semibold text-red-900">
            {" "}
            CSR (Client-Side Rendering)
          </span>{" "}
          renderiza la página en el navegador y es ideal para aplicaciones
          interactivas como dashboards.
          <span className="font-semibold text-red-900">
            {" "}
            SSR (Server-Side Rendering)
          </span>{" "}
          genera el HTML en cada solicitud, proporcionando datos siempre
          actualizados y un excelente SEO.
          <span className="font-semibold text-red-900">
            {" "}
            SSG (Static Site Generation)
          </span>{" "}
          crea las páginas durante el proceso de compilación, ofreciendo la
          máxima velocidad para contenido que cambia poco.
          <span className="font-semibold text-red-900">
            {" "}
            ISR (Incremental Static Regeneration)
          </span>{" "}
          combina la velocidad del contenido estático con la posibilidad de
          regenerar páginas automáticamente tras un intervalo de tiempo. Además,
          Next.js incorpora
          <span className="font-semibold text-red-900"> Streaming</span>, que
          envía la interfaz al navegador de forma progresiva, y
          <span className="font-semibold text-red-900">
            {" "}
            PPR (Partial Prerendering)
          </span>
          , que mezcla contenido estático y dinámico para ofrecer el mejor
          equilibrio entre rendimiento y actualización de datos.
        </p>

        <Link href="/about" className="text-blue-500 hover:underline">
          Ir a la página About
        </Link>
      </div>
    </div>
  );
}
