import React, { useContext, useEffect } from 'react';
import TodosContext from '../../context/todos/todosContext';
import AuthContext from '../../context/auth/authContext';
import Todo from './Todo';

const TodosList = () => {
  const todosContext = useContext(TodosContext);
  const authContext = useContext(AuthContext);

  const { todos, getTodosByUserId } = todosContext;
  const { user } = authContext;

  useEffect(() => {
    getTodosByUserId(user);
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
