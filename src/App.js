import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import RegisterPersonal from './components/registerPersonal'
import RegisterCompany from './components/registerCompany'
import EmailVerification from './components/emailVerification'
import LandingPage from './components/landingPage';

function App () {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={RegisterPersonal} />
        <Route path='/RegisterCompany' component={RegisterCompany} />
        <Route path='/EmailVerification' component={EmailVerification} />
        <Route path='/LandingPage' component={LandingPage} />
        
      </Switch>
    </main>
  )
}

export default App
