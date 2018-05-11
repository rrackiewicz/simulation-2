import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { action_updateName, action_updateAddress, action_updateCity, action_updateState, action_updateZip, } from '../ducks/reducer'


class StepOne extends Component {
  constructor() {
    super()
    // this.state = {
    //     id: 0,
    //     name: '',
    //     address: '',
    //     city: '',
    //     st: '',
    //     zip: 0
    // }

    // this.updateName = this.updateName.bind(this)
    // this.updateAddress = this.updateAddress.bind(this)
    // this.updateCity = this.updateCity.bind(this)
    // this.updateState = this.updateState.bind(this)
    // this.updateZip = this.updateZip.bind(this)
  }

  // updateName(e){
  //   let listing = { ...this.state.listing }
  //   listing.name = e.target.value
  //   this.setState({listing})
  // }

  // updateAddress(e){
  //   let listing = { ...this.state.listing }
  //   listing.address = e.target.value
  //   this.setState({listing})
  // }

  // updateCity(e){
  //   let listing = { ...this.state.listing }
  //   listing.city = e.target.value
  //   this.setState({listing})
  // }

  // updateState(e){
  //   let listing = { ...this.state.listing }
  //   listing.st = e.target.value
  //   this.setState({listing})
  // }

  // updateZip(e){
  //   let listing = { ...this.state.listing }
  //   listing.zip = e.target.value
  //   this.setState({listing})
  // }

  // clearForm() {
  //  let listing = { ...this.state.listing }
  //     listing = {
  //       id: 0,
  //       name: '',
  //       address: '',
  //       city: '',
  //       st: '',
  //       zip: 0
  //     }
  //   this.setState({ listing })
  // }

  render() {
    return (
      <div className="">
        <div className="flexV">
          <div className="propertyName" >       
            <label>Property Name</label>
            <input onChange={(e) => this.props.action_updateName(e.target.value)} type="text" placeholder="" value={this.props.name}/>
          </div>
          <div className="propertyAddress">
            <label>Address</label>
            <input onChange={(e) => this.props.action_updateAddress(e.target.value)} type="text" placeholder="" value={this.props.address}/>
          </div> 
        </div>

        <div className="flexH jcsb test">
          <div className="propertyCity">
            <label>City</label>
            <input onChange={(e) => this.props.action_updateCity(e.target.value)} className="propertyCity" type="text" placeholder="" value={this.props.city}/>
          </div>
          <div className="propertyState">
            <label>State</label>
            <input onChange={(e) => this.props.action_updateState(e.target.value)} className="propertyState" type="text" placeholder="" value={this.props.st}/>          
          </div>
          <div className="propertyAddress">
            <label>Zip</label>
            <input onChange={(e) => this.props.action_updateZip(e.target.value)} className="propertyZip" type="text" placeholder="" value={this.props.zip}/>  
          </div>
        </div>

        <div className="flexH buttonRow test">
          <div className="mla">
          {/* TODO: REDUX STUFF ON CLICK */}
            <Link to='/wizard/2'><button className="darkgreen">Next Step</button></Link>
          </div>
        </div> 
      </div>
    );
  }
}
function mapStateToProps(state) {
  const {name, address, city, st, zip} = state;
  return {
    name,
    address,
    city,
    st,
    zip
  } 
}

let actions = {
  action_updateName,
  action_updateAddress,
  action_updateCity,
  action_updateState,
  action_updateZip
}

export default connect( mapStateToProps, actions )( StepOne );