import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { action_updateImage } from '../ducks/reducer'

class StepTwo extends Component {
  constructor() {
    super()
    // this.state = {
    //   image: ''
    // }
    // this.updateImage = this.updateImage.bind(this)
  }

  // updateImage(e){
  //   this.setState({image: e.target.value})
  // }

  render() {
    return (
      <div className=""> 
        <div className="propertyImage mla" >       
          <label>Image URL</label>
          {/* TODO: REDUX STUFF ONCHANGE */}
          <input onChange={(e) => this.props.action_updateImage(e.target.value)} type="text" placeholder="" value={this.props.image}/>
        </div>
        <div className="flexH buttonRow">
          <div className="">
           {/* TODO: REDUX ONCLICK CALL ACTION */}
            <Link to='/wizard/1'><button className="darkgreen">Previous Step</button></Link>
          </div>
          <div className="mla">
           {/* TODO: REDUX STUFF CALL ACTION */}
            <Link to='/wizard/3'><button className="darkgreen">Next Step</button></Link>
          </div>
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { image } = state;
  return {
    image
  } 
}

let actions = {
	action_updateImage
}

export default connect( mapStateToProps, actions )( StepTwo );