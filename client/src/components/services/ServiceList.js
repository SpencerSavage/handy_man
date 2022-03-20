import Service from './Service';

const ServiceList = ({ services, deleteService, updateService }) => {
 return (
    <>
     { services.map( s =>
       <>
          <Service
          key={s.id}
          value={s.sname}
          {...s}

          deleteService={deleteService}
          updateService={updateService}
          />
        </>
     )}
   </>
  )
} 

export default ServiceList;