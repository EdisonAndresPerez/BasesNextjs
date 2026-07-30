import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { TfiAgenda } from "react-icons/tfi";
import { LuBookUser } from "react-icons/lu";

const menuItems = [
  {
    path: "/dashboard/main",
    title: "Agregar Notas",
    subTitle: "puedes agregar notas",
    icon: <TfiAgenda size={40} />,
  },
  {
    path: "dashboard/users",
    title: "mis Usuarios",
    subTitle: "puedes agregar y ver usuarios",
    icon: <LuBookUser size={40} />,
  },
];

//rafc
export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[350]  left-0 h-screen "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido de nuevo,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?"
              alt="User profile picture"
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Edison Andres Perez Martinez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
