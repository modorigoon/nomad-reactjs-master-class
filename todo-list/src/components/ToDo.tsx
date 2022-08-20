import { useSetRecoilState } from "recoil";
import { CategoryEnum, ToDoInterface, toDoState } from "../atoms";

function ToDo({ text, category, id }: ToDoInterface) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1)
      ];
    })
  }

  return <li>
    <span>{text}</span>
    {category !== CategoryEnum.DOING && <button name={CategoryEnum.DOING} onClick={onClick}>Doing</button>}
    {category !== CategoryEnum.TO_DO && <button name={CategoryEnum.TO_DO} onClick={onClick}>To Do</button>}
    {category !== CategoryEnum.DONE && <button name={CategoryEnum.DONE} onClick={onClick}>Done</button>}
  </li >
}

export default ToDo;
