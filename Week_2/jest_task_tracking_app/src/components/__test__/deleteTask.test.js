import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import TaskList from '../TaskList';
import { removeTask } from '../../store/taskSlice';

const mockStore = configureMockStore([]);

describe('TaskList component', () => {
  it('dispatches removeTask action when the first task is deleted', () => {
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

    const deleteButtons = screen.getAllByTestId('deleteBtn'); // Get all delete buttons
    fireEvent.click(deleteButtons[0]); // Click the first delete button

    const firstTaskId = initialTasks[0].id;
    const expectedAction = removeTask(firstTaskId);
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
