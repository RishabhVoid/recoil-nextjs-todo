import { selector } from "recoil";
import { queryAtom, todoListAtom } from "./atoms";
import { Todo } from "./constants/types";

export const filteredTodoList = selector({
  key: "filtered-todos",
  get: ({ get }) => {
    const query = get(queryAtom);
    const list = get(todoListAtom);

    if (!query.trim().length) {
      return list;
    }

    return list.filter((todo: Todo) => {
      const title = todo.text;
      const doesMatch = title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return doesMatch;
    });
  },
});
