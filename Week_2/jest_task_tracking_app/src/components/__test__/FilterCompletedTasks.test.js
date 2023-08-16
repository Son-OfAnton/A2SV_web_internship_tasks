import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import TaskList from '../TaskList';
import { updateTask } from '../../store/taskSlice';

const mockStore = configureMockStore([]);

describe('TaskList component', () => {
  it('filters completed tasks when "Show Completed Tasks" button is clicked', () => {
    const initialTasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    const store = mockStore({ tasks: initialTasks });

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const showCompletedButton = screen.getByText('Show Completed Tasks');
    fireEvent.click(showCompletedButton);

    const completedTask = screen.getByText('Task 2');
    expect(completedTask).toBeInTheDocument();

    const incompleteTask = screen.queryByText('Task 1');
    expect(incompleteTask).toBeNull();
  });
});
