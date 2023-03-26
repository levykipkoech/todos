import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="text-grey-400 p-18">
        <Navbar/>
        {children}
         
        </div>
     );
}
 
export default Layout;