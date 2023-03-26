import Link from "next/link";

const Navbar = () => {
    return ( 
        <div>
        <nav>
            
            <div>
                
                <div className=" flex justify-end m-2  ">
                
                    <div className=" text-blue-300 border p-2 ml-2 border-blue-200 rounded-full uppercase text-md mt-3 bg-blue-200 text-xs ">
                    <Link href="/" legacyBehavior><a>Home</a></Link>
                    </div>
                    <div className=" text-blue-300 border p-2 ml-2 border-grey-200 rounded-full uppercase text-md mt-3 bg-gray-200 text-xs ">
                    <Link href="/create" legacyBehavior><a>Create Todo</a></Link>
                    </div>
                    <div className=" text-blue-300 border p-2 ml-2 border-red-200 rounded-full uppercase text-md mt-3 bg-red-200 text-xs  ">
                    <Link href="/register" legacyBehavior><a>sign up</a></Link>
                    </div>
                    <div className=" text-blue-300 border p-2 ml-2 border-red-200 rounded-full uppercase text-md mt-3 bg-red-200 text-xs ">
                    <Link href="/login" legacyBehavior><a>sign in</a></Link>
                    </div>
                </div>
                
            </div>
         
        </nav>
        </div>
     );
}
 
export default Navbar;