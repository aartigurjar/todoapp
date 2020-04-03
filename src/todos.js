import React from 'react';

const Todos=({todos, deleteTodo})=> {
    const todosList= todos.length ? (
        todos.map(todos => {
            return(
                <div className="collection-item" key={todos.id}>
                    <span onClick={()=>{deleteTodo(todos.id)}}>{todos.content}</span>
                </div>
            )
        }
    )
    ):
       ( <p className="center">You have no todos left!!!</p>  )
    
    return(
        <div className="todos collection">
            {todosList}
        </div>
    )
}

export default Todos;