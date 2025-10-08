import { useState } from "react";

export default function NewTasks({onAdd , onDelete}) {
    const [enteredTask , setEnteredTask] = useState();

    function handleChange(e){
        setEnteredTask(e.target.value)
    }
    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('')
    }
    return (
        <div className="flex items-center justify-between">
            <input value={enteredTask}  onChange={handleChange} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type='text'></input>
            <button onClick={handleClick} className="bg-transparent hover:bg-stone-200 text-grey-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-black rounded">
                Add Task
            </button>
        </div>
    )
}