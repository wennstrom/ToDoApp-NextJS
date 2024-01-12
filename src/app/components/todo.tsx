'use client'
import { ToDo as ToDoEntity } from "../entities/todo"
import styles from '../page.module.css'

interface PropTypes {
    todo: ToDoEntity
}

export default function ToDo({todo}: PropTypes) {

    return (
        <li className={todo.completed ? styles.completed : ''}>{todo.title}</li>
    )
}