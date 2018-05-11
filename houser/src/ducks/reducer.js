const initialState = {
  id: 0,
  name: '',
  address: '',
  city: '',
  st: '',
  zip: 0,
  image: '',
  mortgage: 0,
  rent: 0
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = 'UPDATE_IMAGE'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'; 
const UPDATE_RENT = 'UPDATE_RENT'; 
const RESET_STORE = 'RESET_STORE';
// const DELETE_LISTING = 'DELETE_LISTING';

function reducer( state = initialState, action ){ 
  switch( action.type ){
    case UPDATE_NAME:
      return Object.assign( {}, state, { name : action.payload } );

    case UPDATE_ADDRESS:
      return Object.assign( {}, state, { address : action.payload } );

    case UPDATE_CITY:
      return Object.assign( {}, state, { city : action.payload } );

    case UPDATE_STATE:
      return Object.assign( {}, state, { st : action.payload } );

    case UPDATE_ZIP:
      return Object.assign( {}, state, { zip : action.payload } );

    case UPDATE_IMAGE:
      return Object.assign( {}, state, { image : action.payload } );

    case UPDATE_MORTGAGE:
      return Object.assign( {}, state, { mortgage : action.payload } );

    case UPDATE_RENT:
      return Object.assign( {}, state, { rent : action.payload } );
    
    case RESET_STORE:
      return Object.assign( {}, state, action.payload );

    default: 
      return state;
   }
} 

//ACTION CREATORS HERE
export function action_updateName( name ){
  return {
    type: UPDATE_NAME,
    payload: name
  }
}

export function action_updateAddress( address ){
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export function action_updateCity( city ){
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function action_updateState( state ){
  return {
    type: UPDATE_STATE,
    payload: state
  }
}

export function action_updateZip( zip ){
  return {
    type: UPDATE_ZIP,
    payload: zip
  }
}

export function action_updateImage( image ){
  return {
    type: UPDATE_IMAGE,
    payload: image
  }
}

export function action_updateMortgage( mortgage ){
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  }
}

export function action_updateRent( rent ){
  return {
    type: UPDATE_RENT,
    payload: rent
  }
}

export function action_resetStore() {
  return {
    type: RESET_STORE,
    payload: initialState
  }
}

// export function action_deleteListing(id) {
//   return {
//     type: DELETE_LISTING,
//     payload: id
//   }
// }

export default reducer; 
