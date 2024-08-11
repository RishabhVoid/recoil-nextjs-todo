import { atom } from "recoil";
import Priorities from "./constants/priority-types";
import { Todo } from "./constants/types";

export const queryAtom = atom({
  key: "query",
  default: "",
});

export const priorityAtom = atom({
  key: "priority",
  default: Priorities[0],
});

export const todoListAtom = atom({
  key: "todoList",
  default: [] as Todo[],
});
