// eslint-disable-next-line no-unused-vars
import React from 'react'
import Todo from './Todo'

// eslint-disable-next-line react/prop-types
function TodoContainer({todos, deleteTodo}) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => {
                return (    
                <Todo key={index} todos={todo} index={index} deleteTodo={deleteTodo}/>
                )
            })}
        </div>
    )
}

export default TodoContainer