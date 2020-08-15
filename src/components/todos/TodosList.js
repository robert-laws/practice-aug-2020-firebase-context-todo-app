import React, { useContext, useEffect } from 'react';
import TodosContext from '../../context/todos/todosContext';
import Todo from './Todo';

const TodosList = () => {
  const todosContext = useContext(TodosContext);
  const { todos, getTodos } = todosContext;

  useEffect(() => {
    getTodos();
  }, []);

  if (todos.length === 0) return <h3>No Todos</h3>;

  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodosList;
