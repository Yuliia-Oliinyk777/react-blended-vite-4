import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'reduxTodo/todos/operations';
import { selectTodos } from 'reduxTodo/todos/selectors';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const startTodos = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          <Filter />
          {startTodos.length ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
