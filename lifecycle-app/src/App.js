import React from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  state = {
    input: "",
    toDoList: []
  };

  notify = input => {
    toast(input);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    this.notify("New ToDo created: " + input);
    this.setState(prevState => {
      return {
        toDoList: [...prevState.toDoList, input]
      };
    });
  };

  componentDidMount = () => {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    this.notify("ToDo deleted: " + this.state.toDoList[e.target.id]);
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
        <ToastContainer />
      </div>
    );
  }
}

export default App;
