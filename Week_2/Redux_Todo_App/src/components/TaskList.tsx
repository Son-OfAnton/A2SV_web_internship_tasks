import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, removeTask, Task } from '../store/taskSlice';
import { RootState } from '../store/store';


const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const toggleTaskStatus = (task: Task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="flex items-center justify-between p-2 border-b">
          <div
            className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
            onClick={() => toggleTaskStatus(task)}
          >
            {task.title}
          </div>
          <button className="text-red-600" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
