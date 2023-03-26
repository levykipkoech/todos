import { useState } from "react";

const Registration = () => {

     const[username, setUsername] = useState("")
     const[email, setEmail] = useState("")
     const[password,setPassword] = useState("")

     const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            username: username,
            email: email,
            password: password
        };

        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        const data = await response.json();

        console.log(data);
     };

    return ( 
        <div>
            <form onSubmit={handleSubmit} className="px-4 max-w-3xl mx-auto space-y-6 my-30 border-t border-grey-200" >
            <div className="w-1/2">
            <label>username</label>
            <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-900"
            type="text" 
            placeholder="Enter username" 
            value={username} onChange={(e) => setUsername(e.target.value)} 
            required
            /> 
            </div>
            <div className="w-1/2">
            <label>email</label>
            <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-900" 
               type="text" 
               placeholder="Enter email" 
               value={email} onChange={(e) => setEmail(e.target.value)} 
               required
            /> 
            </div>
            <div className="w-1/2">
            <label>password</label>
            <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-900" 
               type="password" 
               placeholder="Enter password" 
               value={password} onChange={(e) => setPassword(e.target.value)} 
               required
            /> 
            </div>
            <button type="submit">sign up</button>
         </form>
        </div>
     );
}
 
export default Registration;
