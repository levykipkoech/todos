import { useState } from "react"
import Head from "next/head"

const Create = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [priority, setPriority] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/myendpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description, status, priority }),
        });
        const data = await res.json();
        console.log(data);
    };

    return ( 
        <>
            <Head>
                <title>Create Todo | Home</title>
            </Head>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required></input>
                    <label>Description</label>
                    <input type="text" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} required></input>
                    <label>Status</label>
                    <input type="text" placeholder="Enter status" value={status} onChange={e => setStatus(e.target.value)} required></input>
                    <label>Priority</label>
                    <input type="text" placeholder="Enter priority" value={priority} onChange={e => setPriority(e.target.value)} required></input>
                    <button type="submit">Submit</button>
                </form>  
            </div>
        </>
     );
}
 
export default Create;
