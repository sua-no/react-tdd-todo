import React from "react";
import TodoList from "./TodoList";
import { render } from "@testing-library/react";

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  // todos 배열 넣었을 떄 TodoItem 컴포넌트 랜더링 되는지 확인
  it("renders todos properly", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });
});
