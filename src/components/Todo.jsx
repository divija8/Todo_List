// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Todo({todos, index, deleteTodo}) {
  return (
    <div className="todo">
      <p>{todos}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;