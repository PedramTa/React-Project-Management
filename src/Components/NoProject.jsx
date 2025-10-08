import logo from '../assets/no-projects.png'

export default function NoProject({onStartAddProject}) {
    
    return (
        <>
            <div className="mt-24 text-center w-2/3 justify-center items-center flex-col">
                <img src={logo} className="w-16 h-16 object-contain mx-auto" />
                <h2 className="text-xl font-bold text-stone-500 my-4">no project selected</h2>
                <p className="text-stone-400 mb-4">Select a project or Get start with a new one</p>
                <button onClick={onStartAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-5">Create new project</button>
            </div>
        </>
    )
}