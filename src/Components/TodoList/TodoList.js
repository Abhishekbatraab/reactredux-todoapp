import React from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {todos: state.todos};
}

const ConnectedList = ({todos}) => (
    (todos.length>0)?
        <ul>
            {todos.map((el,index)=>(
                <li key={index}>{el.todo}</li>
            ))}
        </ul>:
        <p>No to dos</p> 
);

const TodoList = connect(mapStateToProps)(ConnectedList);

export default TodoList