import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, fname, lname, phone, updateService, setEdit }) => {
    const [service, setService] = useState({ id: '', fname: '' , lname: '', phone: 0})

    useEffect( () => {
        if (id) {
            setService({ id, fname, phone })
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
        setService({ id: '', fname: '', lname: '', phone: ''})
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>Type:</label>
            <input
                name='name'
                value={service.name}
                onChange={(e) => setService({ ...service, name: e.target.value})}
                required 
                />
             <label>name:</label>
             <input
                name='phone'
                value={service.mins}
                onChange={(e) => setService({ ...service, phone: e.target.value})}
                required 
                type="number"
                />
             <label>Desc:</label>
             <textarea
                name='name'
                value={service.name}
                onChange={(e) => setService({ ...service, name: e.target.value})}
                required
            ></textarea>
            <button type="submit">Submit</button>
         </form>
        </>
    )
}


export default ServiceForm;