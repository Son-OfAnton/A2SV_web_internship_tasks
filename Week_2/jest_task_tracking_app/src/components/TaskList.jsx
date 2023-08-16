import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, removeTask } from '../store/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleTaskStatus = (task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const deleteTask = (id) => {
    dispatch(removeTask(id));
  };

  const startEditing = (id, title) => {
    setEditingTaskId(id);
    setEditedTask(title);
  };

  const finishEditing = (task) => {
    dispatch(updateTask({ ...task, title: editedTask }));
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
        <div
          key={task.id}
          className={`flex items-center justify-between p-2 border-b mb-4 bg-white rounded-lg shadow-xl ${
            task.completed ? 'bg-gray-200' : ''
          }`}
        >
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskStatus(task)}
            className="mr-2"
          />
          {editingTaskId === task.id ? (
            <input
              data-testid="toBeEdited"
              type="text"
              value={editedTask}
              onChange={e => setEditedTask(e.target.value)}
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
            <button
              data-testid="saveBtn"
              className="text-blue-600 mr-2"
              onClick={() => finishEditing(task)}
            >
              Save
            </button>
            ) : (
            <button
              data-testid="editBtn"
              className="text-blue-600 mr-2"
              onClick={() => startEditing(task.id, task.title)}
            >
              Edit
            </button>
          )}
          <button data-testid="deleteBtn" className="text-red-600" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default TaskList;
