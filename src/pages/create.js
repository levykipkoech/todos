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
            <div className="text-gray-500 rounded">

                <form className="p-4 max-w-3xl mb-2 pb-64 mx-auto space-y-6 my-30 border-t border-gray-300 "  onSubmit={handleSubmit}>
                   <h1 className="text-3xl font-semibold">Create Todo</h1>
                   
                    <div className="w-1/2">
                      <label>Title</label>
                      <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-red-500" 
                        type="text" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                        required
                     /> 
                    </div>
                    
                    <div className="w-3/4">
                    <label>Description</label>
                    <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500" 
                        type="text" 
                        placeholder="Enter description" 
                        value={description}
                        onChange={e => setDescription(e.target.value)} 
                        required
                     /> 
                    </div>
                      <div className="flex space-x-4">
                      <div className="w-1/4">
                      <label>Status</label>
                      <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500" 
                        type="text" 
                        placeholder="Enter status" 
                        value={status}
                        onChange={e => setStatus(e.target.value)} 
                        required 
                        />
                        </div>

                    <div className="w-1/4   ">
                    <label>Priority</label>
                    <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500" 
                        type="text" 
                        placeholder="Enter priority" 
                        value={priority} onChange={e => setPriority(e.target.value)} 
                        required 
                    /> 
                    </div>
                      </div>
                    

                    <button type="submit">Submit</button>
                    
                </form>  
            </div>
        </>
     );
}
 
export default Create;
