import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function ({ children, buttonCaption }, ref) {

    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })

    function onCloseDialog(event) {
        event.preventDefault();
        dialogRef.current.close();
    }

    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form action="dialog" className="mt-4 text-right" onSubmit={onCloseDialog}>
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default Modal;