import React, { useContext, useState } from 'react';
import TodosContext from '../../context/todos/todosContext';

const AddTodoForm = () => {
  const todoContext = useContext(TodosContext);
  const { addTodo } = todoContext;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo({
      title,
      category,
      completed: false,
    });

    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Todo Title: </label>
      <input
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder='add todo title'
      />
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=''>Select a Category</option>
        <option value='home'>Home</option>
        <option value='food'>Food</option>
        <option value='work'>Work</option>
      </select>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
