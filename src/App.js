import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id:1,
        title:"Take a walk in garden!",
        completed:false
      },
      {
        id:2,
        title:"Go out for gym!",
        completed:false
      },
      {
        id:3,
        title:"Meet mark zuckerberg!",
        completed:false
      }
    ]
  }

  // toggle todo function
  markComplete = (id) => {
    this.setState(
      { 
        todos: this.state.todos.map(todo => {
                if(todo.id === id){
                  todo.completed = !todo.completed
                }
                return todo;
              })//end of map function
      })
  }

  //delete todo 
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }


  //add todos
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title:title,
      completed:false
    }
    this.setState({
      todos: [...this.state.todos,newTodo]
    });
  }

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
          <div className = "container">
              <Header />
              <AddTodo addTodo = {this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
          </div>
      </div>
    );
  }
}

export default App;
