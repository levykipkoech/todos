import { useState } from "react";

const Registration = () => {

     const[username, setUsername] = useState("")
     const[email, setEmail] = useState("")
     const[password,setPassword] = useState("")

    return ( 
        <div>
            <label>username</label>
        <input type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} required></input>
        <label>email</label>
        <input type="text" placeholder="Enter username" value={email} onChange={e => setEmail(e.target.value)} required></input>
        <label>password</label>
        <input type="text" placeholder="Enter username" value={password} onChange={e => setPassword(e.target.value)} required></input>
       
        </div>
     );
}
 
export default Registration;