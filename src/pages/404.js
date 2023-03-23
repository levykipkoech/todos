import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>Ooooop...</h1>
            <h2>Page not found</h2>
            <p>Go back to <Link href = "/">Home page</Link></p>
        </div>
     );
}
 
export default NotFound;