import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTask({ id: Date.now(), title, completed: false }));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-10 text-center">
      <input
        data-testid="titleField"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a task..."
        className="lg:w-96 md:w-96 sm:64 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button data-testid="addTaskBtn" type="submit" className="ml-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">Add Task</button>
    </form>
  );
};

export default AddTask;
