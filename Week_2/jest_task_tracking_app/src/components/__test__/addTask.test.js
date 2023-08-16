import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import AddTask from '../AddTask';
import { addTask } from '../../store/taskSlice';

const mockStore = configureMockStore([]);

describe('AddTask component', () => {
  it('dispatches addTask action when form is submitted', () => {
    const store = mockStore([]);
    
    render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );
    
    const taskTitle = 'Test Task';
    const input = screen.getByTestId('titleField');
    const addButton = screen.getByTestId('addTaskBtn');

    fireEvent.change(input, { target: { value: taskTitle } });
    fireEvent.click(addButton);

    const expectedAction = addTask({ id: expect.any(Number), title: taskTitle, completed: false });
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
