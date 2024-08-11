import { priorityTypes, Todo } from "@/constants/types";

const changePriority = (
  lis: Todo[],
  index: number,
  priority: priorityTypes,
): Todo[] => {
  const todo = lis[index];
  const updatedTodo: Todo = { ...todo, priority: priority };
  return [...lis.slice(0, index), updatedTodo, ...lis.slice(index + 1)];
};

export default changePriority;
