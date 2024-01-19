'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from './api/todos';
import ToDo from './components/todo';
import styles from './page.module.css'

export default function Home()  {
  const {data: todos, isLoading} = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ['todos']
  });

  return (
    <div>
      <h3>Todos</h3>
      <ul className={styles.toDos}>
        {isLoading && <span>Loading...</span>}
        {todos?.map((todo) => <ToDo todo={todo} />)}
      </ul>
    </div>
  );
}
