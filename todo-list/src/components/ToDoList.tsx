import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CategoryEnum, categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';


function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const target = event.currentTarget.value;
    setCategory(target as any);
  }

  return <div>
    <h1>To Dos</h1>
    <hr />
    <select value={category} onInput={onInput}>
      <option value={CategoryEnum.TO_DO}>To Do</option>
      <option value={CategoryEnum.DOING}>Doing</option>
      <option value={CategoryEnum.DONE}>Done</option>
    </select>
    <CreateToDo />
    <ul>
      {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
    </ul>
  </div>;
}

export default ToDoList;
