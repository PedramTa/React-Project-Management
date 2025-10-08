import Input from "./Input.jsx"
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function CreateProject({ onAdd, onCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();



    function handleRef() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === ''
            || enteredDescription.trim() === ''
            || enteredDueDate.trim() === ''){
                modal.current.open()
                return;
            }

            onAdd({
                title: enteredTitle,
                description: enteredDescription,
                dueDate: enteredDueDate
            })
    }

    return (
        <>
        <Modal ref = {modal} btnCaption='Close'>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
            <p className="text-stone-400 mb-4">Please insert a valid input</p>
        </Modal>
        <div className="w-[35rem] mt-16 ml-5">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                Cancle
                </button>
                </li>
                <li>
                <button onClick={handleRef} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                Save
                </button>
                </li>
            </menu>
            <form className="mt-4 text-left">
                <Input ref={titleRef} label="title" />
                <Input ref={descriptionRef} label="description" isTextArea />
                <Input type='date' ref={dueDateRef} label="date" />
            </form>
        </div>
        </>
    )
}