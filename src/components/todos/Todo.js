import React, { useContext, useState } from 'react';
import TodosContext from '../../context/todos/todosContext';

const Todo = ({ id, title, category, completed }) => {
  const todoContext = useContext(TodosContext);
  const { updateTodo, deleteTodo } = todoContext;

  const [update, setUpdate] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTodo = {
      id,
      title: newTitle,
      category,
      completed,
    };

    updateTodo(updatedTodo);

    setUpdate(false);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  if (update)
    return (
      <form onSubmit={handleSubmit}>
        <input
          style={{ minWidth: '400px' }}
          type='text'
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          placeholder='add todo title'
        />{' '}
        <button type='submit'>Update</button>{' '}
        <button onClick={() => setUpdate(false)}>Cancel</button>
      </form>
    );

  return (
    <div>
      <li style={{ margin: '10px 0' }}>
        <span>{title}</span>{' '}
        <button onClick={() => setUpdate(true)}>Update Todo</button>{' '}
        <button onClick={handleDelete}>Delete Todo</button>
      </li>
    </div>
  );
};

export default Todo;
