import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilter } from 'reduxTodo/todos/selectors';
import { changeFilter } from 'reduxTodo/todos/slice';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <input
      onChange={handleChange}
      value={filterValue}
      className={style.input}
      placeholder="Find it"
      name="filter"
    />
  );
};
