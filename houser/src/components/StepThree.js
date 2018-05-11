import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class StepThree extends Component {
  constructor() {
    super()

    this.submitHouse = this.submitHouse.bind(this)
  }
  submitHouse(){
    //TODO: SHOULD PULL THIS DATA OFF MOVESTATETOPROPS
    const newListing = {
      name: this.props.name ,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip
    }
    axios.post('/api/inventory', newListing).then(res => {
      const newListing = res.data
      const {name, address, city, state, zip} = newListing  
      
      //TODO: THIS SHOULD CALL AN ACTION INSTEAD
      this.setState({
        name,
        address,
        city,
        state,
        zip
      })
      //TODO: THIS NEED TO CALL AN ACTION INSTEAD
      //this.clearForm()
    }).catch(err =>{
      console.log("Failed to submit listing")
    })
  }

  render() {
    return (
      <div className="wizardContainer lightergreen">
        <div className="flexH complete">
          <div className="mla">
            <Link to='/'><button onClick={this.submitHouse} className="vividgreen">Complete</button></Link>
          </div>
        </div> 
      </div>
    );
  }
}

export default StepThree;
