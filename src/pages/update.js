import { useState } from "react";

const Update = () => {

    const[title, setTitle] =  useState("")
    const[description, setDescription ] = useState("")
    const[status, setStatus] = useState("")
    const[priority, setPriority] = useState("")

    return ( 
        <div>
           <form>
            <label>title</label>
            <input type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required></input>
            <label>description</label>
            <input type="text" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} required></input>
            <label>status</label>
            <input type="text" placeholder="Enter status" value={status} onChange={e => setStatus(e.target.value)} required></input>
            <label>priority</label>
            <input type="text" placeholder="Enter priority" value={priority} onChange={e => setPriority(e.target.value)} required></input>
        
        </form> 
        </div>
     );
}
 
export default Update;