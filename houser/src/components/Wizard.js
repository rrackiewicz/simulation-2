import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
    this.updateName = this.updateName.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updateCity = this.updateCity.bind(this)
    this.updateState = this.updateState.bind(this)
    this.updateZip = this.updateZip.bind(this)
    this.submitHouse = this.submitHouse.bind(this)
  }

  updateName(e){
    this.setState({name: e.target.value})
  }

  updateAddress(e){
    this.setState({address: e.target.value})
  }

  updateCity(e){
    this.setState({city: e.target.value})
  }

  updateState(e){
    this.setState({state: e.target.value})
  }

  updateZip(e){
    this.setState({zip: e.target.value})
  }

  clearForm() {
    this.setState({
      id: 0,
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    })
  }

  submitHouse(){
    const newListing = {
      name: this.state.name ,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    axios.post('/api/inventory', newListing).then(res => {
      const newListing = res.data
      const {name, address, city, state, zip} = newListing  
      this.setState({
        name,
        address,
        city,
        state,
        zip
      })
      this.clearForm()
    }).catch(err =>{
      console.log("Failed to submit listing")
    })
  }

  render() {
    return (
      <div className="wizardContainer lightergreen">
        <div className="flexH aic underline">
          <div><h1>Add New Listing</h1></div>
          <div className="mla">
            <Link to='/'><button className="pink">Cancel</button></Link>
          </div>
        </div>
        <div className="flexV">
          <div className="propertyName" >       
            <label>Property Name</label>
            <input onChange={this.updateName} type="text" placeholder="" value={this.state.name}/>
          </div>
          <div className="propertyAddress">
            <label>Address</label>
            <input onChange={this.updateAddress} type="text" placeholder="" value={this.state.address}/>
          </div> 
        </div>
        <div className="flexH jcsb">
          <div className="propertyCity">
            <label>City</label>
            <input onChange={this.updateCity} className="propertyCity" type="text" placeholder="" value={this.state.city}/>
          </div>
          <div className="propertyState" value={this.state.state}>
            <label>State</label>
            <input onChange={this.updateState} className="propertyState" type="text" placeholder="" value={this.state.state}/>          
          </div>
          <div className="propertyAddress" value={this.state.zip}>
            <label>Zip</label>
            <input onChange={this.updateZip} className="propertyZip" type="text" placeholder="" value={this.state.zip}/>  
          </div>
        </div>
        <div className="flexH complete">
          <div className="mla">
            <Link to='/'><button onClick={this.submitHouse} className="vividgreen">Complete</button></Link>
          </div>
        </div> 
      </div>
    );
  }
}

export default Wizard;
