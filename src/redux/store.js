import { createStore } from 'redux';

const initialState = {
  // counterValue: 0;
  counter: {
    value: 0,
    step: 1,
  },
  user: {},
};

const reducer = (state = initialState, { type, payload }) => {
  //   console.log('Log action ro reducer: ', action);
  switch (type) {
    case 'counter/Increment':
      return {
        // counterValue: state.counterValue + action.payload,
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      };

    case 'counter/Decrement':
      return {
        // counterValue: state.counterValue - payload,
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };

    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
