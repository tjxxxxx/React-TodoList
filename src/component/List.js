import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((todo,index)=>{
                           return <li key={index}>{todo}</li>
                        }
                                                        
                        )
                    }
                </ul>
            </div>
        )
    }
}
List.propTpyes= {
    todos: PropTypes.array.isRequired

}