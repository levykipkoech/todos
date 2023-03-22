 

import Link from 'next/link';
 

export default function Home() {
  return (
    <>
      <div>
        
        <h1>Home</h1>
        <ul>
          
          <li><Link href="/_register">Register</Link></li>
          <li><Link href="/_create">Create Todo</Link></li>
          <li><Link href="/_update">Update Todo</Link></li>
        </ul>
      </div>
    </>
  );
}