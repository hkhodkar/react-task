import { useState } from "react"

export default function NewTask({onSaveTask}) {

    const [enteredTask, setEnteredTask] = useState('');

    function onChangeInput($event) {
        setEnteredTask($event.target.value)

    }

    function onSaveButton() {
        if(enteredTask.trim()=== "") return;
        onSaveTask(enteredTask);
        setEnteredTask('')
    }

    return (
        <div className="flex items-center gap-4">
            <input  onChange={onChangeInput} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={onSaveButton} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}