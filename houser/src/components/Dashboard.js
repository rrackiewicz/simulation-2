import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import House from './House'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      houses: []
    }
    this.deleteListing = this.deleteListing.bind(this)
  }

  componentDidMount() {
    this.getListings()
  }

  getListings(){
    axios.get('/api/inventory').then(res => {
      let houses = [...this.state.houses]
      houses = res.data
      this.setState({ houses })
      console.log(houses)
    }).catch( err => {
      console.log("Failed to get listings")
    })
  }

  deleteListing(id) {
    axios.delete(`/api/inventory/${id}`).then(res => {
      console.log(`Listing ${id} deleted`)
      this.getListings()
    }).catch(err => {
      console.log('Failed to delete listing')
    })
  }

  render() {
    let renderHouses = this.state.houses.map((e,i) => {
      console.log(e)
      return (
        <House
          key={e+i} 
          house={e}
          deleteListing = {this.deleteListing}
        />
      )
    })

    return (
      <div className="dashboardContainer lightergreen">
        <div className="flexH aic underline">
          <div><h1>Dashboard</h1></div>
          <div className="mla">
            <Link to='/wizard'><button className="vividgreen">Add New Property</button></Link>
          </div>
        </div> 
        <h4>Home Listings</h4>
        {renderHouses}
      </div>
    );
  }
}

export default App;
