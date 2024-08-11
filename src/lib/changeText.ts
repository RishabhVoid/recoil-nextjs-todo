import { Todo } from "@/constants/types";

const changeText = (lis: Todo[], index: number, text: string): Todo[] => {
  const todo = lis[index];
  const updatedTodo: Todo = { ...todo, text: text };
  return [...lis.slice(0, index), updatedTodo, ...lis.slice(index + 1)];
};

export default changeText;
