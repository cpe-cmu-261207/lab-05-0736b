import {useState} from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
    id: number;
    name: string;
    isDone: boolean;
}

const TodoList = () => {
    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTasks] = useState<TaskData[]>([])
    const [input, setInput] = useState("")
    let doned: Array<TaskData>

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInput(ev.target.value)
        setCurTask(ev.target.value)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === "Enter"){
            addTask(curTask)
        }
      }

    const addTask = (taskName: string) => {
        if(taskName === ""){
            alert("Task cannot be empty")
        }
        else{
        const newId = (new Date()).getTime()

        const newDone = false;

        const newTasks = [{id: newId, name: taskName, isDone: newDone}, ...tasks]
        setTasks(newTasks)
        }
        setInput('')
        setCurTask('')
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter( x => x.id !== id)
        setTasks(newTasks)
    }

    const doneTask = (id: number) => {
        const newTasksUn = tasks.filter( x => x.id !== id)
        const newTasks = tasks.filter(x => x.id === id)
        newTasks.forEach(x => {
            if (x.id === id) {
                x.isDone = true;
            }
        })
        doned = [ ...newTasks, ...newTasksUn]
        setTasks(doned)
    }

    const doneTaskNaja = tasks.filter(x => x.isDone === true )
    const undoneTaskNaja = tasks.filter(x => x.isDone === false)

    return (
        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
            <input value={input} className='border border-gray-400 w-full text-2xl' onChange={onChangeCallback} onKeyDown={onKeyDownCallback}></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
            </div>
            {undoneTaskNaja.map( x => <Task id={x.id} name={x.name} isDone={x.isDone} doneFn={doneTask} deleteFn={deleteTask}/>)}
            {doneTaskNaja.map( x => <Task id={x.id} name={x.name} isDone={x.isDone} doneFn={doneTask} deleteFn={deleteTask}/>)}
        </div>
    )
}

export default TodoList