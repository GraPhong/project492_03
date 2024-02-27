import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskRow from './TaskRow';

const timeSlots = Array.from({ length: 22 }, (_, index) => {
  const hours = Math.floor(8 + index / 2);
  const minutes = index % 2 === 0 ? '00' : '30';
  return `${hours}:${minutes}`;
});

const TaskTable = ({ tasks, setTasks }) => {
  const days = Object.keys(tasks);

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          {days.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((time, timeIndex) => (
          <tr key={timeIndex}>
            <td>{time}</td>
            {days.map((day) => (
              <Droppable key={`${day}-${timeIndex}`} droppableId={`${day}-${timeIndex}`} type="task">
                {(provided) => (
                  <td ref={provided.innerRef} {...provided.droppableProps}>
                    <TaskRow day={day} timeIndex={timeIndex} tasks={tasks[day]} setTasks={setTasks} />
                    {provided.placeholder}
                  </td>
                )}
              </Droppable>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
