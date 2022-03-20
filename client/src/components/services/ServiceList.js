import Service from './Service';

const ServiceList = ({ services, workerId, deleteService, updateService }) => {
 return (
    <>
     { services.map( s =>
       <>
            <Service
          {...s}
          workerId={workerId}
          deleteService={deleteService}
          updateService={updateService}
          />
        </>
     )}
   </>
  )
} 

export default ServiceList;