import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../../Redux/actions";

class TodoInputForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            todo: ''
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {todo} = this.state;
        this.props.addTodo({todo})
        this.setState({todo: ""})
    }

    render(){
        const {todo} = this.state;
        return(
            <>
                <div>To Do Form</div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="toDoInput">Enter a to do</label>
                    <input id="todo" type="text" placeholder="Enter a to do" value={todo}
                        onChange={this.handleChange}
                    />
                    <button  type="submit">Add</button>
                </form>            
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: todo => dispatch(addTodo(todo))
    }
}

const Form = connect(null, mapDispatchToProps)(TodoInputForm);

export default Form