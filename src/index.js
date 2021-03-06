import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { myAction, myAction_2 } from './redux/actions';

// console.log(store);
console.log(store.getState());
// console.log(store.dispatch(myAction));
// store.dispatch(myAction_2(5));
// store.dispatch(myAction_2(10));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
