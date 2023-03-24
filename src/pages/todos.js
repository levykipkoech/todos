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
            <h1>Your Todos</h1>
            {todos.map(todo => (
                <div key={todo.id}>
                    <h2>{todo.id}</h2>
                    <h2>{todo.title}</h2>
                    <h3>{todo.completed ? "Completed" : "Not Completed"}</h3>
                    <Link href="/update" legacyBehavior><a>Update</a></Link>
                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </div>
                
            ))}
        </div>
     );
}
 
export default Todo;
