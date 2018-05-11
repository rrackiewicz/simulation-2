import React from 'react'
import placeholder from '../placeholder.png'

function House(props) {
  const {id, name, address, city, state, zip} = props.house
  console.log(`ID received was ${id}`)
  return (
    <div className="houseContainer gray">
      <div className="flexH">
        <div className="">
          <img src={placeholder} width="150px" alt=""/>
        </div>
        <div className="homeStats">
          <div className="flexV">
            <div className="stat">Name: {name}</div>
            <div className="stat">Address: {address}</div>
            <div className="stat">City: {city}</div>
            <div className="stat">State: {state}</div>
            <div className="stat">Zip: {zip}</div>
          </div>
        </div>
        <div className="homeStats">
          <div className="flexV">
            <div className="stat">Monthly Mortgage: </div>
            <div className="stat">Desired Rent:</div>
          </div>
        </div>
        <div className="mla flexH">
          <div className="xButton aic" onClick={() => props.deleteListing(id)}>x</div>
        </div>
      </div>
    </div>
  )
}

export default House