import NewTask from "./NewTask";

export default function Task({ onAddTask, tasks, deleteTask }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onSaveTask={onAddTask} />
            {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any task yet.</p>}
            {tasks.length > 0 && <ul>
                {tasks.map((item, index) => {
                    return (
                        <section className="flex items-center justify-between" key={index}>
                            <ol className="text-stone-500 my-2" >{index + 1}. {item.task}</ol>
                            <button onClick={() => deleteTask(item.taskId)} className="bg-red-600 text-stone-50 my-2 mx-2 p-2 rounded-md">Delete</button>
                        </section>
                    )
                })}
            </ul>}
        </section>

    )
}