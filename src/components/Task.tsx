type TaskProps = {
    id: number;
    name: string;
    isDone: boolean;
    doneFn: Function;
    deleteFn: Function;
}

const Task = ({id, name,isDone, doneFn, deleteFn} : TaskProps) => {


    const taskUndone = <div className="flex justify-between h-8 items-center py-6 border-b group">
        <span className="text-2xl"> {name} </span>
    <div className="flex space-x-1 items-center">
    <button className="bg-green-400 w-24 text-2xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out" onClick = { () => doneFn(id) }>Done</button>
    <button className="bg-red-400 w-24 text-2xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out" onClick = { () => deleteFn(id) }>Delete</button>
    </div>
    </div>

    const taskDone = <div className="flex justify-between h-8 items-center py-6 border-b">
        <span className="text-2xl line-through"> {name} </span>
        </div>

    const computeTask = () => {
        if (isDone === false) {
            return taskUndone
        }
        else {
            return taskDone
        }
    }


    return (
           computeTask()
    )
}

export default Task