import { useState } from "react";

const Update = () => {

    const[title, setTitle] =  useState("")
    const[description, setDescription ] = useState("")
    const[status, setStatus] = useState("")
    const[priority, setPriority] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const response = await fetch('/api/user', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
    
        const data = await response.json();
    
        console.log(data);
      };
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };

    return ( 
        <div>
           <form onSubmit={handleSubmit}>
            <label>title</label>
            <input type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required></input>
            <label>description</label>
            <input type="text" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} required></input>
            <label>status</label>
            <input type="text" placeholder="Enter status" value={status} onChange={e => setStatus(e.target.value)} required></input>
            <label>priority</label>
            <input type="text" placeholder="Enter priority" value={priority} onChange={e => setPriority(e.target.value)} required></input>
            <button type="submit">Update User</button>
        </form>
        
        </div>
     );
}
 
export default Update;