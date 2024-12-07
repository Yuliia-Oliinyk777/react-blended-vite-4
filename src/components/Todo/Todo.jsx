import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/todos/operations';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # 1
        </Text>

        <Text>{todo.text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleClick}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
