import React, { Component } from 'react';

class AddForm extends Component {

    state ={
        content : ''
    }

    handleChange=(e)=>{ 
        this.setState({
            content : e.target.value
        })
        
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
       //console.log(this.state);
       this.setState({
           content: ''
       })
    }

    render() {
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddForm;