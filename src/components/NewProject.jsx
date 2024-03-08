import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAddProject }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function onSaveHandler() {
        const newProject = {
            title: titleRef.current.value,
            description: titleRef.current.value,
            dueDate: titleRef.current.value,
        }
        onAddProject(newProject);
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button onClick={onSaveHandler} className="px-6 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input ref={titleRef} type="text" label="Title" />
                <Input ref={descriptionRef} label="Description" isTextArea />
                <Input ref={dueDateRef} type="date" label="Due date" />
            </div>
        </div>
    )
} 