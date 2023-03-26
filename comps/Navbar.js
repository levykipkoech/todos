import Link from "next/link";

const Navbar = () => {
    return ( 
        <div>
        <nav className="bg-red-900">
            <div className="text-4xl font-extrabold ">
            <h1 className="bg-clip-text">Todo APPLICATION</h1>
            </div>
            <div>
                <div className="text-red-300">
                <Link href="/create" legacyBehavior><a>Create Todo</a></Link>
                </div>
                <div className="text-red-300">
                <Link href="/register" legacyBehavior><a>sign up</a></Link>
                </div>
                <div className="text-red-300">
                <Link href="/login" legacyBehavior><a>sign in</a></Link>
                </div>
            </div>
          <div className="text-red-300">
          <Link href="/todos" legacyBehavior><a>view todos</a></Link>
          </div>
        </nav>
        </div>
     );
}
 
export default Navbar;