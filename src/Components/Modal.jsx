import {createPortal} from 'react-dom'
import { useRef , useImperativeHandle } from 'react'

export default function Modal({children , ref , btnCaption}){
    const dialog = useRef();
    useImperativeHandle(ref, () =>{
      return{
        open(){
            dialog.current.showModal()
        }
    }  
    })
    return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
    {children}
    <form method='dialog' className="mt-4 text-right">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  {btnCaption}</button>
    </form>
    </dialog>, document.getElementById('modal-root'))
}