"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [tasks, setTasks] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    setTasks([...tasks, {title, description}])
    // console.log(tasks)
    setTitle("")
    setDescription("")
  }

  function handleTitle(e){
    setTitle(e.target.value)
  }

  function handleDescription(e){
    setDescription(e.target.value)
  }

  function handleDelete(index){
    let filteredTasks=tasks.filter((task,i)=>i != index)
    setTasks(filteredTasks)
  }

  let renderTask=<h1>No tasks available</h1>

  if(tasks.length>0){
    renderTask=tasks.map((task,index)=>{
      return (
        <li key={task.title} className="flex items-center justify-between mb-5">
          <div className="flex justify-between items-center w-2/3">
            <h5 className="text-2xl font-semibold">{task.title}</h5>
            <h5 className="text-lg font-medium">{task.description}</h5>
          </div>
          <button onClick={()=>{
            handleDelete(index)
          }} className="bg-red-600 rounded text-white px-4 py-2 font-bold">Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="text-xl border-zinc-800 border-2 m-5 px-4 py-2 rounded" placeholder="Enter task name here" value={title} onChange={handleTitle}/>
        <input type="text" className="text-xl border-zinc-800 border-2 m-5 px-4 py-2 rounded" placeholder="Enter task description here" value={description} onChange={handleDescription}/>
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">Add task</button>
      </form>
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page