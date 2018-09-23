import React from 'react'
import { Link } from 'react-router-dom'
import {Container,
        Col,
        Row,
        Icon,
        Button} from 'react-materialize'

const HomeButtons = () => (
<section className='HomeButtons'>
  <Row>
    <Col s={12}>
      <Container>
        <Row>
          <Col s={3}></Col>
          <Col>
            <Link to={'EmergencyAssist'}>
              <Button className="center-align" id="help" waves='light' large className='red'>Request Emergency Assistance<Icon left>cloud</Icon></Button>
            </Link>
          </Col>
          <Col s={3}></Col>
        </Row>
        <Row>
          <Col s={3}></Col>
          <Col s={3}>
            <Link to='Volunteer'>
              <Button className="volunteer" waves='light'>Volunteer to Help<Icon right>cloud</Icon></Button>
            </Link>
          </Col>
          <Col s={3}></Col>
        </Row>
      </Container>
    </Col>
  </Row>
</section>
)

export default HomeButtons
