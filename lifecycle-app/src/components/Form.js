import React from "react";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Todo"
        name="input"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
