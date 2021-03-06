import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';
import {useParams} from 'react-router-dom';


const Services = () => {

    const {workerId} = useParams()
    const [services, setServices] = useState([])


    useEffect( () => {
        axios.get(`/api/workers/${workerId}/services`)
        .then( res => setServices(res.data))
        .catch( err => console.log(err))
    }, [])

    const addService = (service) => {   
        axios.post(`/api/workers/${workerId}/services`, { service })
        .then( res => {setServices([ ...services, res.data])
        })
        .catch( err => console.log(err))
    }

    const deleteService = (id) => {
        axios.delete(`/api/workers/${workerId}/services/${id}`)
        .then( res => {
            alert(res.data.message)
            setServices(services.filter( s => s.id !== id))
        })
        .catch( err => console.log(err))
    }

    const updateService = (id, service) => {
        axios.put(`/api/workers/${workerId}/services/${id}`, { service })
        .then( res => {
            const newUpdatedServices = services.map( s => {
                if (s.id === id) {
                    return res.data
                }
                return s
            })
            setServices(newUpdatedServices)
        })
        .catch( err => console.log(err))
    }


    return (
        <>
        <ServiceForm addService={addService} />
        <h1>All Services</h1>
        
        <ServiceList 
        services={services} 
        deleteService={deleteService}
        updateService={updateService}
        />
    </>
    )
    }


export default Services;
