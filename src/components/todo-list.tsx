import { priorityAtom, todoListAtom } from "@/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "@/components/ui/button";
import { priorityTypes, Todo } from "@/constants/types";
import TodoItem from "./todo";
import { Input } from "./ui/input";
import PrioritySelector from "./priority-selector";
import { FormEvent, useState } from "react";
import { filteredTodoList } from "@/selectors";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoListAtom);
  const [task, setTask] = useState("");

  const priority = useRecoilValue(priorityAtom);
  const filteredList = useRecoilValue(filteredTodoList);

  const addTodoItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      text: task,
      priority: priority as priorityTypes,
      done: false,
    };

    setTodos((prevList) => {
      return [...prevList, newTodo];
    });
    setTask("");
  };

  return (
    <div className="max-w-[30rem] w-[90%]">
      <form className="w-full flex flex-col" onSubmit={addTodoItem}>
        <div className="w-full flex mb-2">
          <Input
            placeholder="Task..."
            className="mr-2"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <PrioritySelector />
        </div>
        <Button type="submit" className="w-full">
          Add
        </Button>
      </form>
      <div className="flex flex-col gap-y-2 mt-4">
        {filteredList.map((todo, index) => {
          return <TodoItem todo={todo} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
