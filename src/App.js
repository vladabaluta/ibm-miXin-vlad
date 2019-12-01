import React, {Component} from 'react';
import Header from './components/header/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';
import ApiCallService from '../../my-app/src/services/ApiCall';

class App extends Component {
  constructor(props) {
    super(props)

  }

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Task 1',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 2',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 3',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 4',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 5',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 6',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 7',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 8',
        completed: false
      },
    ]
  }
    // Toggle Mark Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
    // Delete Todo
    delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id
      !== id)] });
    }

    // Add Todo
    addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] });
    }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete=
          {this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}



export default App;
