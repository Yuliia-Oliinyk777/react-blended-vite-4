import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from 'reduxTodo/todos/selectors';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <>
      {todos.length ? (
        <Grid>
          {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
