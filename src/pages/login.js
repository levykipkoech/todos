import { useState } from "react";

const Login = () => {
     
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            
        });
        
       
        const data = await response.json();
        console.log(data);
    };

   //  if (response.ok) {
       
   //    history.push("/create");
   //  } else {
       
   //    console.error("invalid email or password");
   //  }


    return (
        <div className="login">
         <form onSubmit={handleLogin} className="px-4 max-w-3xl mx-auto space-y-6 my-30 border-t border-grey-200" >
         <h1 className="text-3xl font-semibold">Sign In</h1>
            <div className="w-1/2 ">
            <label>Email</label>
            <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-red-500" 
               type="text" 
               placeholder="Enter email" 
               value={email} onChange={(e) => setEmail(e.target.value)} 
               required
            /> 
            </div>
            <div className="w-1/2">
            <label>Password</label>
            <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500" 
               type="password" 
               placeholder="Enter password" 
               value={password} onChange={(e) => setPassword(e.target.value)} 
               required
            /> 
            </div>
            <button>Log in</button>
         </form>
             
        </div>
    );
};

export default Login;
