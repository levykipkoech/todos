import Link from "next/link";

const Navbar = () => {
    return ( 
        
        <nav>
            <div>
            <h1>Todo APPLICATION</h1>
            </div>
            <div className="flex justify-center md:justify-end">
                <div>
                <Link href="/create" legacyBehavior><a>Create Todo</a></Link>
                </div>
                <div>
                <Link href="/register" legacyBehavior><a>sign up</a></Link>
                </div>
                <div>
                <Link href="/login" legacyBehavior><a>sign in</a></Link>
                </div>
            </div>
          <div  className="text-primary font-bold underline" >
          <Link href="/todos" legacyBehavior><a>view todos</a></Link>
          </div>
        </nav>
     );
}
 
export default Navbar;