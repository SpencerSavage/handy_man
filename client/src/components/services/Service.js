import { useState } from 'react';
import ServiceForm from "./ServiceForm"

const Service = ({ id, fname, lname, phone, updateService, deleteService }) => {
    const [editing, setEdit] = useState(false)

    return (
        <>
            <h2>{id}</h2>
            <h3>{fname}</h3>
            <h3>{phone}</h3>
            {
                editing ?
                <>
                <ServiceForm
                id={id}
                id={id}
                fname={fname}
                phone={phone}
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