import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withAuthentication, AuthenticationService } from '../Helpers'
import logo from '../Assets/BL-Navy.png'
import { Link } from 'react-router-dom'

// import ModalLogIn from '../Components/ModalLogIn'
// import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button, Input, Navbar, Badge, NavItem} from 'react-materialize'

let image = <div className="valign-wrapper"><img src={logo} alt="navy logo"/><div ><p className="free" >FREE RESPONDER</p></div></div>

const HeaderNav = ({authState, signupModal, loginModal}) => (
    <Navbar id="navMenu" brand={image} right>
      <NavItem >
        <Modal
          header='Command Controller Login'
          trigger={<Button id="logon" className="navMenu">LOGIN</Button>}>
            <Input type="password" label="password" s={12} />
            <Input type="email" label="Email" s={12} />
            <Link to="CommandControl">
              <Button>Submit</Button>
            </Link>
          </Modal>
        </NavItem>
    </Navbar>
)

const handleLogout = (setAuthState) => {
    localStorage.removeItem('token')
    AuthenticationService.setAuthState(null)
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(HeaderNav))
