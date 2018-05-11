import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { connect } from 'react-redux'
import { action_resetStore } from '../ducks/reducer'


class Wizard extends Component {
  render() {
    return (
      <div className="wizardContainer lightergreen">
        <div className="flexH aic underline">
          <div><h1>Add New Listing</h1></div>
          <div className="mla">
            <Link to='/'><button onClick={() => this.props.action_resetStore()} className="pink">Cancel</button></Link>
          </div>
        </div>
        <Route component={StepOne} path ="/wizard/1" />
        <Route component={StepTwo} path ="/wizard/2" />
        <Route component={StepThree} path ="/wizard/3" />
      </div>
    );
  }
}

let actions = {
  action_resetStore
}

export default connect( null, actions )( Wizard );

