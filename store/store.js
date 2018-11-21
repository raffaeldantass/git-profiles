import { createStore } from 'redux';

const reducer = (action, state) => {
  
  switch(action.type) {
    case 'HELLO': 
      return initialState = state + 1
      break;
  }

  return initialState
}

const initialState = {}
const store = createStore(reducer, initialState);

export default store;