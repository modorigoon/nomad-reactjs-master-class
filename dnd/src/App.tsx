import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

function App() {
  const onDragEnd = () => { };

  return <DragDropContext onDragEnd={onDragEnd}>
    <div>
      <Droppable droppableId="one">
        {(magic) =>
          <ul ref={magic.innerRef} {...magic.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(magic) =>
                <li ref={magic.innerRef} {...magic.draggableProps}>
                  <span {...magic.dragHandleProps}>[MOVE]</span>ONE
                </li>
              }
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {(magic) =>
                <li
                  ref={magic.innerRef}
                  {...magic.draggableProps}
                  {...magic.dragHandleProps}>
                  TWO
                </li>
              }
            </Draggable>
          </ul>
        }
      </Droppable>
    </div>
  </DragDropContext>
}

export default App;
