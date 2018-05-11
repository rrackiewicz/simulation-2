import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { action_updateMortgage, action_updateRent } from '../ducks/reducer'

class StepThree extends Component {
  constructor() {
    super()
    this.submitListing = this.submitListing.bind(this)
    // this.updateMortgage = this.updateMortgage.bind(this)
    // this.updateRent = this.updateRent.bind(this)
  }

  // updateMortgage(){
  //   //Do REDUX stuff here
  // }

  // updateRent(){
  //   //Do REDUX stuff here
  // }

  submitListing(){
    const newListing = this.props.state

    axios.post('/api/inventory', newListing).then(res => {

    }).catch(err =>{
      console.log("Failed to submit listing")
    })
  }


  render() {
    return (
      <div className="">
        <div>
          <div className="">
            <h4>Recommended Rent = {this.props.mortgage * 1.25}</h4>
          </div>
          <div className="">
            <label>Monthly Mortgage Amount</label>
            <input onChange={(e) => this.props.action_updateMortgage(e.target.value)} value={this.props.mortgage} className="" type="text"/>
          </div>
          <div className="">
            <label>Desired Monthly Rent</label>
            <input onChange={(e) => this.props.action_updateRent(e.target.value)} value={this.props.rent} className="" type="text"/>
          </div>
        </div>
        <div className="flexH buttonRow">
          <div className="">
            {/* TODO: REDUX ONCLICK CALL ACTION */}
            <Link to='/wizard/2'><button className="darkgreen">Previous Step</button></Link>
          </div>
          <div className="mla">
            {/* TODO: REDUX ONCLICK CALL ACTION*/}
            <Link to='/'><button onClick={this.submitListing} className="vividgreen">Complete</button></Link>
          </div>
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mortgage, rent } = state;
  return {
    state,
    mortgage,
    rent
  } 
}

let actions = {
  action_updateMortgage,
  action_updateRent
}

export default connect( mapStateToProps, actions )( StepThree );
