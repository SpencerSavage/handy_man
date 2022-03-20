import { useState } from "react";
import WorkerForm from "./WorkerForm";
import { Link } from "react-router-dom";

const Worker = ({id, fname, lname, phone, updateWorker, deleteWorker}) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
        <>
          <WorkerForm 
            id={id}
            fname={fname}
            lname={lname}
            phone={phone}
            updateWorker={updateWorker}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h4>{fname} {lname}</h4>
          <h6>{phone}</h6>
          <br/>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteWorker(id)}>
            Delete
          </button>
          <Link to={`/workers/${id}/services`}>
          <button>
            Services 
          </button>
          </Link>

        </>
      }
      
      
    </>
  )

}

export default Worker;