import { AboutH1, AboutHeader, AboutP, MainHeader, FeaturePaddingImg, FeaturePaddingText } from "../styles/shared";
import {Row, Col, Container, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Team = () => (
  <>
    <AboutHeader>
      <AboutH1>Meet The Team</AboutH1>
      <AboutP size='sm'> Bats frighten me. It's time my enemies shared my dread. This isn't a car. I'm not wearing hockey pads. It was a dog. It was a big dog. Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn't ended.
      </AboutP>
    </AboutHeader>
    <MainHeader>
    <Container>
      
        
        
      <Row>
        <Col>
        
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Shelly</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Isaac</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Tom</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Mary</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Col>
      
      </Row>
    </Container>
      
    </MainHeader>
   



  </>
    
  
)

export default Team;