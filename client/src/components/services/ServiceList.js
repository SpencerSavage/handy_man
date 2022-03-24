import Service from './Service';
import {Container, Row, Card, Button, Col} from 'react-bootstrap'
import { ServiceLists } from '../styles/shared';

const ServiceList = ({ services, deleteService, updateService }) => (
 
    <Container>
         <Row>
              <>
               { services.map( s =>
              
                    <Col>
                         <Service
                         key={s.id}
                         {...s}
                         deleteService={deleteService}
                         updateService={updateService}
                         />
                    </Col>
               )}
                 </>
         </Row>
    </Container>
)

export default ServiceList;