import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { createNewTodo } from 'reduxTodo/todos/operations';

export const Form = () => {
  const dispatch = useDispatch();

  const handlSubmit = evt => {
    evt.preventDefault();
    const newTodo = {
      text: evt.target.search.value,
    };

    dispatch(createNewTodo(newTodo));
  };

  return (
    <form className={style.form} onSubmit={handlSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
