import { priorityTypes, Todo } from "@/constants/types";
import capitalize from "@/lib/capitalize";
import { Badge } from "@/components/ui/badge";
import { useRecoilState } from "recoil";
import { todoListAtom } from "@/atoms";
import deleteAtIndex from "@/lib/deleteAtIndex";
import markDone from "@/lib/markDone";
import changeText from "@/lib/changeText";
import changePriority from "@/lib/changePriority";

interface Props {
  todo: Todo;
  index: number;
}

const TodoItem = ({ todo: todoMeta, index }: Props) => {
  const [todo, setTodo] = useRecoilState(todoListAtom);

  const deleteTodo = () => {
    const newLis = deleteAtIndex(todo, index);
    setTodo(newLis);
  };

  const markTodoDone = () => {
    const newLis = markDone(todo, index);
    setTodo(newLis);
  };

  const editTodoText = () => {
    const newText = prompt("Enter new todo title");
    const newLis = changeText(todo, index, newText || "Blank");
    setTodo(newLis);
  };

  const editTodoPriority = () => {
    const newText = prompt("Enter priority Low, Mid, High");
    let priority = newText ? newText.trim().toLowerCase() : todoMeta.priority;
    if (!["low", "mid", "high"].includes(priority)) {
      priority = todoMeta.priority;
    }
    const newLis = changePriority(todo, index, priority as priorityTypes);
    setTodo(newLis);
  };

  return (
    <div className="flex flex-col w-full bg-white px-4 py-2 rounded-lg">
      <div className="flex items-center">
        <h1 className={`mr-2 flex-1 ${todoMeta.done && "line-through"}`}>
          {todoMeta.text}
        </h1>
        <Badge
          onClick={editTodoPriority}
          className="w-[50px] rounded-md cursor-pointer justify-center"
        >
          {capitalize(todoMeta.priority)}
        </Badge>
      </div>
      <div className="mt-2 flex items-center gap-x-2">
        <Badge onClick={editTodoText} className="cursor-pointer">
          Edit
        </Badge>
        <Badge className="cursor-pointer" onClick={deleteTodo}>
          Delete
        </Badge>
        <Badge onClick={markTodoDone} className="cursor-pointer">
          {todoMeta.done ? "Mark Undone" : "Mark Done"}
        </Badge>
      </div>
    </div>
  );
};

export default TodoItem;
