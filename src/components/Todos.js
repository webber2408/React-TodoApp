import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    //console.log("hello from todos.js");
    //to receive the todos property
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
      )); 
  }
}


// prop types ----> good practice
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
