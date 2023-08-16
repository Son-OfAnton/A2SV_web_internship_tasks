import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-12 text-center">Redux Task List</h1>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
