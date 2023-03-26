import Link from "next/link";
import { useState } from "react";

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return {
        props: { todos: data}
    }
}

const Todo = ({ todos }) => {
    const [todoId, setTodoId] = useState(null);

    const handleDeleteTodo = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();

        console.log(data);
    };

    return ( 
        <div>
            <h1 className="text-center text-green-600 text-4xl">Your Todos</h1>
            <div className="grid grid-cols-4  ">
            {todos.map(todo => (
                 
                <div key={todo.id} className=" bg-white p-4  rounded shadow-md m-4 gap-10">
                    <h2>{todo.id}</h2>
                    <h2>{todo.title}</h2>
                    <h3>{todo.completed ? "Completed" : "Not Completed"}</h3>
                    <div className="text-red-300 rounded flex justify-between mt-8">
                     <div className="">   
                    <Link  href="/update" legacyBehavior><a>Update</a></Link>
                    </div>
                    <div className="mt-2">
                    <button onClick={() => handleDeleteTodo(todo.id)} >Delete</button>
                    </div>
                    </div>
                 
               </div> 
            ))}
            </div>
        </div>
     );
}
 
export default Todo;
