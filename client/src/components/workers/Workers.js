import axios from 'axios';
import WorkerList from './WorkerList';
import {useState, useEffect} from 'react';
import WorkerForm from './WorkerForm';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
      .then( res => setWorkers(res.data))
      .catch( err => console.log(err))
  }, [])

  const addWorker =(worker) => {
    axios.post('/api/workers', {worker})
      .then( res => setWorkers([...workers, res.data]))
      .catch( err => console.log(err))
  }

  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, {worker})
      .then( res => {
        const newUpdatedWorker = workers.map( w => {
          if (w.id == id) {
            return res.data
          }
            return w
        })
        setWorkers(newUpdatedWorker)
      })
      .catch( err => console.log(err))
  }

  const deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
     .then(res =>
       setWorkers(workers.filter( w => w.id !== id)))
     .catch( err => console.log(err))
  }

  return(
    <>
    <WorkerForm addWorker={addWorker} />
      <h1>All Workers</h1>
      <WorkerList 
        workers={workers}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    </>
  )
}

export default Workers;