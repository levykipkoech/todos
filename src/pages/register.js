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
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} required />
                <label>Email</label>
                <input type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
                <label>Password</label>
                <input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
     );
}
 
export default Registration;
