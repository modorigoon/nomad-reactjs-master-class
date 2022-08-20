import { atom, selector } from "recoil";

export type categoryType = "TO_DO" | "DOING" | "DONE"

export enum CategoryEnum {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE"
}

export interface ToDoInterface {
  text: string;
  id: number;
  category: CategoryEnum;
}

export const categoryState = atom<CategoryEnum>({
  key: "category",
  default: CategoryEnum.TO_DO
})

export const toDoState = atom<ToDoInterface[]>({
  key: "toDo",
  default: []
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter(todo => todo.category === category);
  }
});
