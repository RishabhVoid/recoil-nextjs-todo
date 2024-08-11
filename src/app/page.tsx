"use client";

import SearchBar from "@/components/search-bar";
import TodoList from "@/components/todo-list";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <div className="p-8 min-h-screen w-screen flex flex-col items-center bg-sky-300">
        <div className="flex items-center max-w-[30rem] w-[95%]">
          <SearchBar />
        </div>
        <br />
        <TodoList />
      </div>
    </RecoilRoot>
  );
};

export default App;
