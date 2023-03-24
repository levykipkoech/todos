 import Link from "next/link";
 
 export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await res.json();
    return {
        props: { todos: data}
    }
 }
 const handleDeleteTodo = async () => {
    const response = await fetch(`/api/todos/${userId}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    console.log(data);
  };

const Todo = ({todos}) => {
    return ( 
        <div>
            <h1>Your Todos</h1>
            {todos.map(todo => (
                <div key={todo.userId}>
                    <h2>{todo.title}</h2>
                    <h3>{todo.completed}</h3>
                    <Link href="/login" legacyBehavior><a>sign in</a></Link>
                    <button onClick={handleDeleteTodo}>Delete Todo</button>
                </div>
                
            ))}
            
        </div>
     );
}
 
export default Todo;