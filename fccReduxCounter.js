const INCREMENT = "INCREMENT"; 
const DECREMENT = "DECREMENT"; 

const counterReducer = (state = 0, action) => { 
  switch (action.type) {
    case INCREMENT: state=state + 1; return state;
    case DECREMENT: state=state - 1; return state;
    default: return state
  }
};

const incAction = () => {return {type: INCREMENT};};  
const decAction = () => {return {type: DECREMENT};};
const store = Redux.createStore(counterReducer);