import React from "react";
import TodoItem from "./TodoItem";

// const TodoList = ({ todos }) => {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem todo={todo} key={todo.id} />
//       ))}
//     </ul>
//   );
// };

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
