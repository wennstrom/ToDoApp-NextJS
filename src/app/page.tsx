'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from './api/todos';
import ToDo from './components/todo';
export default function Home()  {
  const {data: todos, isLoading} = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ['todos']
  });

  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos?.map((todo) => <ToDo todo={todo} />)}
      </ul>
    </div>
  );
}
