import { MainHeader, FeaturePaddingImg, FeaturePaddingText, AboutH1, AboutP, AboutHeader } from "../styles/shared";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => (
  <>
    <MainHeader>Welcome <br></br> to <br></br> HandyMan!</MainHeader>
    <Container>
      <Row>
        <FeaturePaddingImg >
          <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" width='300px' alt="tools">
          </img>
        </FeaturePaddingImg>
        <FeaturePaddingText>
          <h3>Feature that is amazing</h3>
          <br></br>
          <p> It was a dog. It was a big dog. Swear to me! I'm not wearing hockey pads. Does it come in black?</p>
          <br></br>
          <Link to={'/workers'}>
          <Button>Meet the Team</Button>
          </Link>
        </FeaturePaddingText>
      </Row>
    </Container>
    <Container>
      <AboutH1 textAlign='center'>
        Services
        </AboutH1>
        <br></br>
        <AboutH1 textAlign='center' size='sm'>
          Call Us Now (123) 546-6576
        </AboutH1>
        <br></br>
        
      <Row>
        <Col>
        <Link to={'/workers/:workerId/services'}>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Service 1</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Link>
        </Col>
        <Col>
        <Link to={'/workers/:workerId/services'}>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Service 2</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Link>
        </Col>
        <Col>
        <Link to={'/workers/:workerId/services'}>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Service 3</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Link>
        </Col>
        <Col>
        <Link to={'/workers/:workerId/services'}>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
            <Card.Body>
              <Card.Title>Service 4</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </Link>
        </Col>
      
      </Row>
    </Container>
  </>
    
  )

export default Home;