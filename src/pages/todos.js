 export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await res.json();
    return {
        props: { todos: data}
    }
 }


const Todo = ({todos}) => {
    return ( 
        <div>
            <h1>Your Todos</h1>
            {todos.map(todo => (
                <div key={todo.userId}>
                    <h2>{todo.title}</h2>
                    <h3>{todo.completed}</h3>

                </div>
            ))}
        </div>
     );
}
 
export default Todo;