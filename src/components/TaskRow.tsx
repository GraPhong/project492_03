import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskRow = ({ day, timeIndex, tasks, setTasks }) => {
  const handleDeleteTask = () => {
    const newTasks = [...tasks];
    newTasks[timeIndex] = null;
    setTasks((prevTasks) => ({ ...prevTasks, [day]: newTasks }));
  };

  return (
    <div>
      {tasks[timeIndex] && (
        <Draggable draggableId={`${day}-${timeIndex}`} index={timeIndex}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div>{tasks[timeIndex]}</div>
              <button onClick={handleDeleteTask}>Delete</button>
            </div>
          )}
        </Draggable>
      )}
    </div>
  );
};

export default TaskRow;
