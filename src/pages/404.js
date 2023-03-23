import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
     const router = useRouter()
    useEffect(()=>{
      setTimeout(()=>{
          router.push('/');
      }, 3000)
    },[])
    return ( 
        <div>
            <h1>Ooooops...</h1>
            <h2>Page not found</h2>
            <p>Go back to <Link href = "/">Home page</Link></p>
        </div>
     );
}
 
export default NotFound;