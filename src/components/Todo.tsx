import {useState} from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
    id: number;
    name: string;
}

const TodoList = () => {

    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTasks] = useState<TaskData[]>([])

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }

    const addTask = (taskName: string) => {
        const newId = (new Date()).getTime()

        const newTasks = [{id: newId, name: taskName}, ...tasks]

        setTasks(newTasks)
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter( x => x.id !== id)
        setTasks(newTasks)
    }

    const doneTask = (id: number) => {
        const newTasks = tasks.filter( x => x.id !== id)
        setTasks(newTasks)
    }

    return (
        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
            <input className='border border-gray-400 w-full text-2xl' onChange={onChangeCallback}></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
            </div>
            {tasks.map( x => <Task id={x.id} name={x.name} doneFn={doneTask} deleteFn={deleteTask}/>)}
        </div>
    )
}

export default TodoList