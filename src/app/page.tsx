'use client';
import { useQuery} from '@tanstack/react-query';
import { fetchTodos, addTodo } from './api/todos';
import ToDo from './components/todo';
import styles from './page.module.css'
import TodoInput from './components/todoInput';
import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query'

export default function Home() {

  const [title, setTitle] = useState("");
  const queryClient = useQueryClient()

  const { data: todos, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const data = await fetchTodos();
      return data;
    },
  });
  
  const {mutate} = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['todos']})
    },
  })

  function handleSubmit(e: any) {
      mutate(e.target.value)
  }
  function onKeyDown(e: any) {
      if (e.key === 'Enter') {
          handleSubmit(e)
          setTitle("")
      }
  }
  
  return (
    <div className='container' style={{height: '100vh'}}>
      <div className='col-6 mx-auto mt-5 bg-light p-3 px-4' style={{borderRadius: '26px'}}>
        <h3 className='mb-3'>Todos</h3>
        <div className="my-3">
          <input placeholder="Enter todo..." className={styles.todoInput} value={title} onChange={(e) =>setTitle(e.target.value)} onKeyDown={(e) => { onKeyDown(e)}}/>
        </div>
        <ul className={`p-0 ${styles.toDos}`}>
          {isLoading && <span>Is loading...</span>}
          {todos?.map((todo) => <ToDo key={todo.id} todo={todo} />)  }  
        </ul>
      </div>
    </div>
  );
}
