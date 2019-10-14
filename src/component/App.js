import React from 'react';
import Add from './Add';
import List from './List';
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:['eat','sleep']
        }
        this.addTodo=this.addTodo.bind(this)
    }
    addTodo(todo){
        const {todos} =this.state
        todos.unshift(todo)
        this.setState({todos})
    }
    render(){
        const {todos}=this.state;
        return (
            <div>
                <h1>Simple To do List</h1>
                <Add count={todos.length} addTodo={this.addTodo}></Add>
                <hr></hr>
                <List todos={todos}></List>
            </div>
        )
    }
}