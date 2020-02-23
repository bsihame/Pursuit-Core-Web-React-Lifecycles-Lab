import React from "react";

const ToDoItem = props => {
  return (
    <>
      <div className={"toDoItem"}>
        <h5>{props.input}</h5>
        <button id={props.id} onClick={props.handleClick}>
          Done
        </button>
      </div>
    </>
  );
};

export default ToDoItem;
