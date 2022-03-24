import { useState } from 'react';
import ServiceForm from "./ServiceForm";
import { Link } from 'react-router-dom';

const Service = ({ id, sname, stype, location, updateService, deleteService }) => {
    const [editing, setEdit] = useState(false)

    return (
        <>
            
            <h3>{sname}</h3>
            <h3>{stype}</h3>
            <h3>{location}</h3>
            {
                editing ?
                <>
                <ServiceForm
                id={id}
                sname={sname}
                stype={stype}
                location={location}
                updateService={updateService}
                setEdit={setEdit}
                />
            <button onClick ={ () => setEdit(false) }>Cancel</button>
                </>
                :
            <button onClick ={ () => setEdit(true) }>Edit</button>  

        }
            <button onClick ={ () => deleteService(id) }>Delete</button>
            <Link to={`/services/${id}/comments`}>
          <button>
            Comments 
          </button>
          </Link>
        </>
         

    )
}

export default Service;