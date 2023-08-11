import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      dispatch(addTask({ id: Date.now(), title, completed: false }));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task title..."
        className="px-2 py-1 border rounded"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">Add Task</button>
    </form>
  );
};

export default AddTask;
