import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, sname, stype, location, updateService, setEdit }) => {
    const [service, setService] = useState({sname:'', stype:'', location:''})

    useEffect( () => {
        if (id) {
            setService({ id, sname, stype, location })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateService(id, service)
            setEdit(false)
        } else {
        addService(service)
        }
        setService({ id: '', sname: '', stype: '', location: ''})
    }

    return (
        <>
        <h3> { id ? 'Update Service' : 'Create Service'}</h3>
         <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                name='sname'
                value={service.sname}
                onChange={(e) => setService({ ...service, sname: e.target.value})}
                required 
                />
             <label>Type:</label>
             <input
                name='stype'
                value={service.stype}
                onChange={(e) => setService({ ...service, stype: e.target.value})}
                required 
                />
             <label>Location:</label>
             <textarea
                name='location'
                value={service.location}
                onChange={(e) => setService({ ...service, location: e.target.value})}
                required
            ></textarea>
            <button type="submit">Submit</button>
         </form>
        </>
    )
}


export default ServiceForm;