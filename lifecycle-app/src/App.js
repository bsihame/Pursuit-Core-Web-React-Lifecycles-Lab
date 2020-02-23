import React from "react";
import "./App.css";
import Form from "./components/Form";
// import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  state = {
    input: "",
    toDoList: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    console.log(input);
    this.setState(prevState => {
      return {
        toDoList: [...prevState.toDoList, input]
      };
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    let toDos = this.state.toDoList.filter(
      (item, i) => i !== Number(e.target.id)
    );
    this.setState({ toDoList: toDos });
  };

  render() {
    const { input, toDoList } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ToDoList
          toDoList={toDoList}
          input={input}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
