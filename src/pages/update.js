import { useState } from "react";

const Update = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "",
        priority: ""
    });

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
            <form className="px-4 max-w-3xl mx-auto space-y-6 my-30 border-t border-grey-200"  onSubmit={handleSubmit}>
                   <h1 className="text-3xl font-semibold">Update</h1>
                   
                    <div className="w-1/2">
                      <label>Title</label>
                      <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-red-500" 
                        type="text" 
                        placeholder="Enter title" 
                        value={formData.title} 
                        onChange={e => setTitle(e.target.value)} 
                        required
                     /> 
                    </div>
                    
                    <div className="w-3/4">
                    <label>Description</label>
                    <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500" 
                        type="text" 
                        placeholder="Enter description" 
                        value={formData.description}
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
                        value={formData.status}
                        onChange={e => setStatus(e.target.value)} 
                        required 
                        />
                        </div>

                    <div className="w-1/4   ">
                    <label>Priority</label>
                    <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500" 
                        type="text" 
                        placeholder="Enter priority" 
                        value={formData.priority} onChange={e => setPriority(e.target.value)} 
                        required 
                    /> 
                    </div>
                      </div>
                    

                    <button type="submit">Submit</button>
                    
                </form>  
        </div>
    );
}

export default Update;
