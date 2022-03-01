import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  it("has input and a button", () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText("할 일을 입력하세요"); // input이 있는지 확인
    getByText("등록"); // button이 있는지 확인
  });

  it("changes input", () => {
    const { getByPlaceholderText } = render(<TodoForm />);
    const input = getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기"); // DOM에 특정 속성이 있는지 확인
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn(); // jest에서 제공하는 mock함수 (함수가 호출 됐는지, 호출됐다면 어떤 파라미터로 호출됐는지 확인)
    const { getByText, getByPlaceholderText } = render(
      <TodoForm onInsert={onInsert} />
    );
    const input = getByPlaceholderText("할 일을 입력하세요");
    const button = getByText("등록");
    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    fireEvent.click(button); // 등록하면
    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute("value", ""); // input이 비워져야함
  });
});
