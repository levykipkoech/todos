import { useState } from "react"
import Head from "next/head"
const Create = () => {
     
    const[title, setTitle] =  useState("")
    const[description, setDescription ] = useState("")
    const[status, setStatus] = useState("")
    const[priority, setPriority] = useState("")

    return ( 
        <>
            <Head>
                <title>create todo | Home</title>
            </Head>
            <div>
            <form>
                <label>Title</label>
                <input type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required></input>
                <label>Description</label>
                <input type="text" placeholder="Enter title" value={description} onChange={e => setDescription(e.target.value)} required></input>
                <label>Title</label>
                <input type="text" placeholder="Enter title" value={status} onChange={e => setStatus(e.target.value)} required></input>
                <label>Priority</label>
                <input type="text" placeholder="Enter title" value={priority} onChange={e => setPriority(e.target.value)} required></input>
            
            </form>  
        </div>
        </>
     );
}
 
export default Create;