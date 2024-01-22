'use client'
import { ToDo as ToDoEntity } from "../entities/todo"
import styles from '../page.module.css'
import { updateTodo } from "../api/todos"
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'


interface PropTypes {
    todo: ToDoEntity,
}

export default function ToDo({todo}: PropTypes) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
      })
      
      const update = (completed: boolean) => {
        todo.completed = completed;
        mutation.mutate(todo);
    }

    return (
        <li className={todo.completed ? styles.completed : ''}>
            <label className={styles.todoContainer}> {todo.title}
                <input type="checkbox" className={styles.todoCheckbox} checked={todo.completed} onChange={(e) => update(e.target.checked)}/>
                <span className={styles.todoCheckmark}></span>
            </label>
        </li>
    )
}