import React, { Component } from 'react';
import Todos from './todos';
import AddForm from './AddForm';

class App extends Component {

  state = {
    todos : [
      {id:1, content : "Watch Netflix"},
      {id:2, content : "Code"}
    ]
  }

  deleteTodo = (id) => {
    //console.log(id);
    let todos=this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    
    this.setState({
      todos:todos
    })

    //console.log(this.state);
  }

  addTodo =(todo) => {
    todo.id= Math.random();
     let todos= [...this.state.todos,todo]
    this.setState({
      todos : todos
     })
    //console.log(todo.id);

  }

  render(){
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">Todos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}  />
          <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
  
}

export default App;
