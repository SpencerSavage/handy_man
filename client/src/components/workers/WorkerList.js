// import { Link } from 'react-router-dom';
import Worker from './Worker';
import {Container, Row, Col, Card} from 'react-bootstrap'

const WorkerList = ({workers, updateWorker, deleteWorker}) => (
  <>
    <Container>
      <Row>
        {workers.map( w =>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1647904522209-9e15687ecb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="course">

              </Card.Img>
              <Worker
                key={w.id}
                {...w}
                updateWorker={updateWorker}
                deleteWorker={deleteWorker}
              />
            </Card>
          </Col>
          )}
      </Row>
    </Container>
  </>
)

export default WorkerList;