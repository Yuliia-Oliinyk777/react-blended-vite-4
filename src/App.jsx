import { Section, Container, Header, Text } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from 'reduxTodo/todos/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
        </Container>
      </Section>
    </>
  );
};
