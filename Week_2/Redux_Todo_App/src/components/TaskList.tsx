import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, removeTask, Task } from '../store/taskSlice';
import { RootState } from '../store/store';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleTaskStatus = (task: Task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const startEditing = (id: number, title: string) => {
    setEditingTaskId(id);
    setEditedTitle(title);
  };

  const finishEditing = (task: Task) => {
    dispatch(updateTask({ ...task, title: editedTitle }));
    setEditingTaskId(null);
  };

  const filteredTasks = showCompleted ? tasks.filter(task => task.completed) : tasks;

  return (
    <div>
      <div className="mb-2">
        <button className="text-blue-600 mr-2" onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? 'Show All Tasks' : 'Show Completed Tasks'}
        </button>
      </div>
      {filteredTasks.map(task => (
        <div key={task.id} className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskStatus(task)}
            />
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editedTitle}
                onChange={e => setEditedTitle(e.target.value)}
              />
            ) : (
              <div
                className={`ml-2 cursor-pointer ${task.completed ? 'line-through' : ''}`}
                onClick={() => toggleTaskStatus(task)}
              >
                {task.title}
              </div>
            )}
          </div>
          <div>
            {editingTaskId === task.id ? (
              <button className="text-blue-600 mr-2" onClick={() => finishEditing(task)}>Save</button>
            ) : (
              <button className="text-blue-600 mr-2" onClick={() => startEditing(task.id, task.title)}>Edit</button>
            )}
            <button className="text-red-600" onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
