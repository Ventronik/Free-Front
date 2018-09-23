import React from 'react'
import {Button,
        Container,
        Col,
        Row,
        Icon,
        Input} from 'react-materialize'
import { Link } from 'react-router-dom'

const VictimForm = () => (
<section className='footer'>
  <Row>
    <Col s={12}>
      <Container>
        <Row>
          <h3>What Type of Help Do You Need</h3>
          <Row>
            <Input name='EmergencyType' type='radio' value='red' label='Red' />
            <Input name='EmergencyType' type='radio' value='yellow' label='Yellow' />
            <Input name='EmergencyType' type='radio' value='green' label='Green' className='with-gap' />
            <Input name='EmergencyType' type='radio' value='brown' label='Brown' disabled='disabled' />
          </Row>
          <h3>Type of Medical Request</h3>
          <h3>Request Rescue</h3>
          <h3>Find a Shelter</h3>
          <h3>Report Other Emergencies</h3>
          <Input s={6} label="First Name" ><Icon>account_circle</Icon></Input>
          <Input s={6} label="Last Name" />
          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
        </Row>
        <Row>
          <Input name='Vehicle' type='checkbox' value='Car or Truck' label='Car or Truck' className='filled-in' />
          <Input name='Vehicle' type='checkbox' value='Water Craft' label='Water Craft' className='filled-in'  />
          <Input name='Vehicle' type='checkbox' value='Air Craft' label='Air Craft' className='filled-in' defaultChecked='checked' />
          <Input name='Vehicle' type='checkbox' value='Helicopter' label='Helicopter' className='filled-in' />
        </Row>
        <Row>
          <Input name='Training' type='checkbox' value='Police (Ret.)' label='Police (Ret.)' className='filled-in' defaultChecked='checked' />
          <Input name='Training' type='checkbox' value='Military (Ret.)' label='Military (Ret.)' className='filled-in'  />
          <Input name='Training' type='checkbox' value='Firefighter (Ret.)' label='Firefighter (Ret.)' className='filled-in' />
          <Input name='Training' type='checkbox' value='Emergency Medical' label='Emergency Medical' className='filled-in' />
        </Row>
        <Row>
            <Input s={12} type='textarea' label='Other skills or training' />
        </Row>
        <Row>
          <Input s={6} label="Emergency Contact Name" ><Icon>account_circle</Icon></Input>
          <Input s={6} label="Emergency Contact Number" validate type='tel'><Icon>phone</Icon></Input>
        </Row>
        <Row>
          <Link to="/">
            <Button className="light" waves='red'>Cancel</Button>
          </Link>
          <Link to="/VictimConfirm">
            <Button waves='light'>Submit Volunteer Request</Button>
          </Link>
        </Row>
      </Container>
    </Col>
  </Row>
</section>
)

export default VictimForm
