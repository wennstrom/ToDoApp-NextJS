'use client'
import { ToDo as ToDoEntity } from "../entities/todo"
import styles from '../page.module.css'

interface PropTypes {
    todo: ToDoEntity
}

export default function ToDo({todo}: PropTypes) {
    return (
        <li className={todo.completed ? styles.completed : ''}>
            <label className={styles.todoContainer}> {todo.title}
                <input type="checkbox" className={styles.todoCheckbox} checked={todo.completed}/>
                <span className={styles.todoCheckmark}></span>
            </label>
        </li>
    )
}