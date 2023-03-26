import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="gray">
        <Navbar/>
        {children}
        </div>
     );
}
 
export default Layout;