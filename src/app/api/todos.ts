import { ToDo } from "../entities/todo";

let toDos = [
    {id: 1, title: 'groceries', completed: false},
    {id: 2, title: 'clean', completed: false},
    {id: 3, title: 'study react', completed: true},
    {id: 4, title: 'groceries', completed: true}
]

export const fetchTodos = async(): Promise<ToDo[]> => {
    return toDos;
}
export const addTodos = async(title: string): Promise<ToDo> => {
    const newToDo = {
        id: toDos.length + 1,
        title: title,
        completed: false
    }
    toDos.push(newToDo);
    
    return newToDo;
}

export const updateTodo = async (todoToUpdate:ToDo): Promise<ToDo> => {
    const newToDos = toDos.map(td => td.id === todoToUpdate.id ? todoToUpdate : td);
    toDos = newToDos;

    return todoToUpdate;
}