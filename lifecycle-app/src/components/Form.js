import React from 'react';

const Form =({todoInput, handleSubmit, handleChange}) =>{
    return(
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Enter Todo"
        value={todoInput}
        onChange={handleChange}
        />
      </form>
    )
  }

export default Form;