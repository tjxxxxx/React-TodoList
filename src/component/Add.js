import React from 'react';
import PropTypes from 'prop-types';

export default class Add extends React.Component{
    constructor (props) {
        super(props)

        this.add=this.add.bind(this)

    }
    add(){
        //1.读取input输入框用ref获取
        //2.判断输入框得值得合法性
        //3.调父组件传过来的setstate方法
        //4.将输入框的值变为空
        const todo = this.todoInput.value.trim()
        if(!todo){
            return 
        }
        this.props.addTodo(todo)
        this.todoInput.value=''

    }
    render(){
        return (
            <div>
                <input type="text" ref={input =>this.todoInput=input}></input>
                <button onClick={this.add}>Add #{this.props.count+1}</button>
            </div>
        )
    }
}
Add.propTypes={
    count:PropTypes.number.isRequired,
    addTodo:PropTypes.func.isRequired
}