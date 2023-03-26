import Navbar from "./Navbar";
 

const Layout = ({children}) => {
    return ( 
        <div className="text-gray-500">
        <Navbar/>
        {children}
          
        </div>
     );
}
 
export default Layout;