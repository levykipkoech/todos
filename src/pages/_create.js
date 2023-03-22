import { useState } from "react";

export default function Create(){

    const[title, setTitle] =  useState("")
    const[description, setDescription ] = useState("")
    const[status, setStatus] = useState("")
    const[priority, setPriority] = useState("")

    return (
        <>
        <form>
            <label>title</label>
            <input type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required></input>
            <label>description</label>
            <input type="text" placeholder="Enter title" value={description} onChange={e => setDescription(e.target.value)} required></input>
            <label>title</label>
            <input type="text" placeholder="Enter title" value={status} onChange={e => setStatus(e.target.value)} required></input>
            <label>title</label>
            <input type="text" placeholder="Enter title" value={priority} onChange={e => setPriority(e.target.value)} required></input>
        
        </form>
        </>
    )
}