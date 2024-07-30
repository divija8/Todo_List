// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function InputContainer({inputValue, writeTodo, addTodo}) {
    return (
        <div className="input-container">
            <input type="text" value={inputValue} onChange={writeTodo}/>
            <button onClick={addTodo}>+</button>
        </div>
    );
}

export default InputContainer;