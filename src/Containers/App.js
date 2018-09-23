import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { request, AuthenticationService } from '../Helpers'
import HeaderNav from '../Components/HeaderNav'
import HomeButtons from '../Components/HomeButtons'
import Footer from '../Components/Footer'
// import WebMap from '../Components/ArcGIS'
import VolunteerSignupConfirmation from '../Components/volunteerComponents/VolunteerSignupConfirmation'
import VolunteerSignup from '../Components/volunteerComponents/VolunteerSignup'
import VictimForm from '../Components/victimComponents/VictimForm'
import VictimConfirm from '../Components/victimComponents/VictimConfirm'

import Home from './Home'

//CSS
import '../CSS/App.css';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <HeaderNav />
            <Switch>
              <Route exact path='/' component={ Home } />

              <Route exact path='/Volunteer' component={ VolunteerSignup } />
              <Route exact path='/VolunteerConfirm' component={ VolunteerSignupConfirmation } />
              <Route exact path='/EmergencyAssist' component={ VictimForm } />
              <Route exact path='/VictimConfirm' component={ VictimConfirm } />
              {/* <Route exact path='/CommandControl' component={ VictimConfirm } /> */}

            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null, mapDispatchToProps)(App)
