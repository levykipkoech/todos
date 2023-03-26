import Link from "next/link";
export default function Home() {
  return (
    <>
    
    <div className="text-4xl font-extrabold text-center mt-32 ">
    <h1 className="bg-clip-text">Todo APPLICATION</h1>
    </div>
    <div className="flex justify-center mt-3">
     <div className=" bg-gray-200 rounded-full p-2 uppercase text-xs font-bold tracking-wider border-2 border-gray-400">
          <Link href="/todos" legacyBehavior><a>view todos</a></Link>
      </div>
      </div>
    </>
  );
}