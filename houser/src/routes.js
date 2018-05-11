import React from 'react';
import {Switch, Route} from 'react-router-dom'

//Components
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'

//NOTE: Bring hashrouter in here if routes don't work
//NOTE: Can access :page on this.props.match.params.page in Wizards component 
//NOTE: Add :page to end of wizard later on

export default (
  <Switch>
    <Route component={Dashboard} exact path ="/" />
    <Route component={Wizard} path ="/wizard" />
  </Switch>
)
