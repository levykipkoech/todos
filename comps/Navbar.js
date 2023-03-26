import Link from "next/link";

const Navbar = () => {
    return ( 
        <div>
        <nav>
            <div>
            <h1>Todo APPLICATION</h1>
            </div>
            <div>
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
          <div>
          <Link href="/todos" legacyBehavior><a>view todos</a></Link>
          </div>
        </nav>
        </div>
     );
}
 
export default Navbar;