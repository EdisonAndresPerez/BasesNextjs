import { Navbar } from "@/components";



//lrc => layout root component
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar/>
      <h1 className="text-lg ">Hello</h1>
      {children}
    </div>
  );
}