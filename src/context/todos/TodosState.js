import React, { useReducer } from 'react';
import TodosContext from './todosContext';
import todosReducer from './todosReducer';
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../types';
import firebase from 'firebase/app';

const TodosState = ({ children }) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const getTodos = async () => {
    try {
      const todosSnapshot = await firebase
        .firestore()
        .collection('todos')
        .get();

      const todos = todosSnapshot.docs.map((todo) => ({
        ...todo.data(),
        id: todo.id,
      }));

      dispatch({ type: GET_TODOS, payload: todos });
    } catch (error) {
      console.error('Error getting todos: ', error);
    }
  };

  const addTodo = async (todo) => {
    try {
      const newTodo = await firebase.firestore().collection('todos').add(todo);
      const todoObject = {
        id: newTodo.id,
        ...todo,
      };
      dispatch({ type: ADD_TODO, payload: todoObject });
    } catch (error) {
      console.error('Error adding new todo: ', error);
    }
  };

  const updateTodo = async (todo) => {
    const { title, category, completed } = todo;

    try {
      await firebase
        .firestore()
        .collection('todos')
        .doc(todo.id)
        .update({ title, category, completed });

      dispatch({ type: UPDATE_TODO, payload: todo });
    } catch (error) {
      console.error('Error updating todo: ', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await firebase.firestore().collection('todos').doc(id).delete();
      dispatch({ type: DELETE_TODO, payload: id });
    } catch (error) {
      console.error('Error deleting todo: '.error);
    }
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
