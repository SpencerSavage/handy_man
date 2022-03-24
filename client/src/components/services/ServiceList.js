import Service from './Service';

const ServiceList = ({ services, deleteService, updateService }) => (
 
    <>
     { services.map( s =>
       
          <Service
          key={s.id}
          {...s}

          deleteService={deleteService}
          updateService={updateService}
          />
     )}
   </>
)

export default ServiceList;