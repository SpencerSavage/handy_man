import {useState, useEffect} from 'react';

const WorkerForm = ({addWorker, id , fname, lname, phone, updateWorker, setEdit}) => {
  const [worker, setWorker] = useState({fname:'', lname:'', phone:''})

  useEffect( () => {
    if (id) {
      setWorker({fname, lname, phone})
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({fname:'', lname:'', phone:''})
  }

  return(
    <>
      <h3> { id ? 'Update Worker' : 'Create Worker'}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          name='fname'
          value={worker.fname}
          onChange={(e) => setWorker({...worker, fname: e.target.value})}
          required
          placeholder='First Name'
        />
        <input 
          name='lname'
          value={worker.lname}
          onChange={(e) => setWorker({...worker, lname: e.target.value})}
          required
          placeholder='Last Name'
        />
        <input 
          name='phone'
          value={worker.phone}
          onChange={(e) => setWorker({...worker, phone: e.target.value})}
          required
          placeholder='Phone #'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;