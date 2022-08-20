import { atom, selector } from "recoil";
import ToDoList from "./components/ToDoList";

export interface ToDoInterface {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<ToDoInterface[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState)
    return [
      toDos.filter(todo => todo.category === "TO_DO"),
      toDos.filter(todo => todo.category === "DOING"),
      toDos.filter(todo => todo.category === "DONE")
    ];
  }
});
