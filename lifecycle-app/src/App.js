import React from 'react';
import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

class App extends React.Component {
  state = {
    input: "",
    toDoList: [],
  }

  handleSubmit = e => {
    e.preventDefault();
    let { input, toDoList } = this.state;
    
  }

  handleChange = e => {
    this.setState({
      [e.target.input]: e.target.value
    })
  }
  render() {
    return (
    <div className="App">
     <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
     <ToDoList/>
    </div>
  );
    }
}

export default App;
