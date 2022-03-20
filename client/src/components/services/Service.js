import { useState } from 'react';
import ServiceForm from "./ServiceForm"

const Service = ({ id, sname, stype, location, updateService, deleteService }) => {
    const [editing, setEdit] = useState(false)

    return (
        <>
            <h2>{id}</h2>
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
        </>

    )
}

export default Service;