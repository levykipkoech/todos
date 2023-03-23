import Link from "next/link";

const Navbar = () => {
    return ( 
        
        <nav>
            <div>
            <h1>Todo APPLICATION</h1>
            </div>
            <div>
                <Link href="/create" legacyBehavior><a>Create Todo</a></Link>
                <Link href="/register" legacyBehavior><a>sign up</a></Link>
                <Link href="/login" legacyBehavior><a>sign in</a></Link>
            </div>
          <div>
          <Link href="/todos" legacyBehavior><a>view todos</a></Link>
          </div>
        </nav>
     );
}
 
export default Navbar;