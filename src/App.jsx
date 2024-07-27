import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title)
    // console.log(desc)
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    const copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }


  let renderTask = <h2 className='text-3xl '>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div key={i} className="bg-gray-200 px-5 py-2 text-center flex w-fit gap-40 justify-between   rounded-lg shadow-md mb-4">
            <h2 className='text-3xl'>{t.title}</h2>
            <p className='font-medium'>{t.desc}</p>
            <button onClick={() =>{deleteHandler(i)}} className='px-4 font-bold font-mono py-1 rounded bg-red-700 text-white'>Delete</button>
          </div>
        </li>
      )
    })

  }

  return (
    <>
      <h1 className='bg-slate-400 px-4 py-2 text-4xl text-center font-semibold mb-10'>My todo List</h1>

      <form className='ml-16 ' onSubmit={submitHandler}>
        <input
          className='border border-zinc-950 m-4 py-2 px-6 rounded'
          type="text"
          placeholder='Enter title Here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}

          
        />
        <input
          className='border border-zinc-950 m-4 py-2 px-6 rounded'
          type="text"
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='px-4 py-2 bg-black text-white rounded font-semibold'>Add Task</button>
      </form>

      <hr className='mt-11' />
      

      <div className='p-5 m-5 bg-red-200'>
        {renderTask}
      </div>

    </>

  )
}

export default App