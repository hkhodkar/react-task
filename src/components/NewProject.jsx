import { Fragment, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";

export default function NewProject({ onAddProject, onCancelProject }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const dialogRef = useRef();

    function onSaveHandler() {

        if (
            titleRef.current.value.trim() === '' ||
            descriptionRef.current.value.trim() === '' ||
            dueDateRef.current.value.trim() === '') {
            dialogRef.current.open();
            return;
        }

        const newProject = {
            title: titleRef.current.value,
            description: titleRef.current.value,
            dueDate: titleRef.current.value,
        }
        onAddProject(newProject);
    }

    return (
        <Fragment>
            <Modal ref={dialogRef} buttonCaption="Okay" >
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">Oops... forgot you forgot enter value.</p>
                <p className="text-stone-600 mb-4">Please make sure provide valid value for every input fields.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <Button onClick={onSaveHandler} >Save</Button>
                    </li>
                </menu>
                <div>
                    <Input ref={titleRef} type="text" label="Title" />
                    <Input ref={descriptionRef} label="Description" isTextArea />
                    <Input ref={dueDateRef} type="date" label="Due date" />
                </div>
            </div>
        </Fragment>
    )
} 