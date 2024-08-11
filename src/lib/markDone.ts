import { Todo } from "@/constants/types";

const markDone = (lis: Todo[], index: number): Todo[] => {
  const todo = lis[index];
  const updatedTodo: Todo = { ...todo, done: !todo.done };
  return [...lis.slice(0, index), updatedTodo, ...lis.slice(index + 1)];
};

export default markDone;
