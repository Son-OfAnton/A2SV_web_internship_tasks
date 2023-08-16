import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import TaskList from '../TaskList';
import { updateTask } from '../../store/taskSlice';

const mockStore = configureMockStore([]);

describe('TaskList component', () => {
  it('dispatches updateTask action when task is edited', () => {
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

    const editButton = screen.getAllByTestId('editBtn')[0];
    fireEvent.click(editButton);

    const editedTitle = 'Edited Task';
    const editInput = screen.getByDisplayValue('Task 1'); // Update to match the title of the first task
    fireEvent.change(editInput, { target: { value: editedTitle } });

    const saveButton = screen.getAllByTestId('saveBtn')[0];
    fireEvent.click(saveButton);

    const expectedAction = updateTask({ id: 1, title: editedTitle, completed: false });
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
