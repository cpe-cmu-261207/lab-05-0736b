type TaskProps = {
    id: number;
    name: string;
    doneFn: Function;
    deleteFn: Function;
}

const Task = ({id, name, doneFn, deleteFn} : TaskProps) => {
    return (
        <div>
            {name}
            <button onClick = { () => doneFn(id) }>Done</button>
            <button onClick = { () => deleteFn(id) }>Delete</button>
        </div>
    )
}

export default Task