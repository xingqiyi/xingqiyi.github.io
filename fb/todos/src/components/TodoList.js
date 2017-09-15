import React from 'react'
 

const TodoList = ({ todos, onTodoClick }) => (
    <ul>

        {todos.map(todo =>
            <li
                key={todo.id}
                {...todo}


            />
        )}


    </ul>
)


export default TodoList
