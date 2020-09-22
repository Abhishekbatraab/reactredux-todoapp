import React from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList'
import Form from './Components/Form/Form'

function App() {
  return (
    <div className="App">
        <h1>Welcome to To Do App!</h1>
        <Form />
        <TodoList />
    </div>
  );
}

export default App;
