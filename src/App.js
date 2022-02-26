import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// actions
import {
  DECREASE,
  INCREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTAL,
  GET_AMOUNT,
} from './action';
// reducer
import reducer from './reducer';
// items
import cartItems from './cart-items';
// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
