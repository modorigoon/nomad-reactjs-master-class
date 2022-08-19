import { useSetRecoilState } from "recoil";
import { ToDoInterface, toDoState } from "../atoms";

function ToDo({ text, category, id }: ToDoInterface) {

  /*
  const onClick = (newCategory: ToDoInterface["category"]) => { 
    console.log(`New category: ${newCategory}`)
  }

  return <li>
    <span>{text}</span>
    {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
    {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
    {category !== "DONE" && <button onClick={() => onClick("DONE")}> Done</button>
    }
  </li >
  */

  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //const newCategory = event.currentTarget.name;
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
    {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
    {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
    {category !== "DONE" && <button name="DONE" onClick={onClick}> Done</button>
    }
  </li >
}

export default ToDo;
