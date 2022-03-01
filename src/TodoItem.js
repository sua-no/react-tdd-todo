import React from "react";

// const TodoItem = ({ todo }) => {
//   const { id, text, done } = todo;

//   return (
//     <li>
//       <span>{text}</span>
//       <button>삭제</button>
//     </li>
//   );
// };

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;

  return (
    <li>
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
        onClick={() => onToggle(id)}
      >
        {text}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
