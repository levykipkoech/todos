import Link from "next/link"; 


 

export default function Home() {
  return (
    
      <div>
          <Link href="/todos" legacyBehavior><a>view todos</a></Link>
      </div>
     
  );
}