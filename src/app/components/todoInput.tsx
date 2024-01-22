'use client'
import styles from '../page.module.css'
import { addTodo } from '../api/todos'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { ToDo } from '../entities/todo'
import { useState } from 'react';

export default function TodoInput() {
    const [title, setTitle] = useState("");
    const queryClient = useQueryClient()

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
    <div className="my-3">
        <input placeholder="Enter todo..." className={styles.todoInput} value={title} onChange={(e) =>setTitle(e.target.value)} onKeyDown={(e) => { onKeyDown(e)}}/>
    </div>
 )
}