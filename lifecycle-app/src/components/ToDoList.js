import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  render() {
    let toDos = this.props.toDoList.map((toDoItem, i) => {
      return (
        <ToDoItem
          key={i}
          id={i}
          input={toDoItem}
          handleClick={this.props.handleClick}
        />
      );
    });
    return (
      <div className={"toDoList"}>
        <h1>ToDoList</h1>
        <div>{toDos}</div>
      </div>
    );
  }
}
export default ToDoList;
