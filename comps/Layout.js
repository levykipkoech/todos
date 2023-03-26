import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="bg-gray-200 px-5">
        <Navbar/>
        {children}
         
        </div>
     );
}
 
export default Layout;