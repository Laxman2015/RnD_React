import React from 'react';

export const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        className="TodoInput"
        type="text"
        value={props.currentTodo}
        onChange={props.handleInputChange}
      />
	  <button onClick={props.handleSubmit} className="button">Add</button>
    </form>
  )
}

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
