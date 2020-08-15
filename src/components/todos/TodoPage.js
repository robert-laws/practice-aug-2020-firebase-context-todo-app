import React from 'react';
import TodoList from './TodosList';
import AddTodoForm from './AddTodoForm';
const TodoPage = () => {
  return (
    <>
      <TodoList />
      <hr />
      <AddTodoForm />
    </>
  );
};

export default TodoPage;
