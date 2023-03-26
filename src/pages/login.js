import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
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
            <label>username</label>
            <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
            <label>email</label>
            <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <label>password</label>
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            <button onClick={handleLogin}>Log in</button>

            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        </div>
    );
};

export default Login;
