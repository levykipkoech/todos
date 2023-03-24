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
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder="Enter title" name="title" value={formData.title} onChange={handleChange} required />
                <label>Description</label>
                <input type="text" placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} required />
                <label>Status</label>
                <input type="text" placeholder="Enter status" name="status" value={formData.status} onChange={handleChange} required />
                <label>Priority</label>
                <input type="text" placeholder="Enter priority" name="priority" value={formData.priority} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Update;
