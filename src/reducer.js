import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from './action';
import cartItems from './cart-items';
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
// reducer
function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === REMOVE) {
    const newCart = state.cart.filter((item) => item.id !== action.payload.id);
    return {
      ...state,
      cart: newCart,
    };
  }
  // if (action.type === INCREASE) {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === action.payload.id) {
  //       cartItem = { ...cartItem, amount: cartItem.amount + 1 };
  //     }
  //     return cartItem;
  //   });

  //   return {
  //     ...state,
  //     cart: tempCart,
  //   };
  // }

  // if (action.type === DECREASE) {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === action.payload.id) {
  //       cartItem = { ...cartItem, amount: cartItem.amount - 1 };
  //     }
  //     return cartItem;
  //   });

  //   return { ...state, cart: tempCart };
  // }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;

        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === 'inc') {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === 'dec') {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      }),
    };
  }
  return state;
}

export default reducer;

// switch (action.type) {
//   case CLEAR_CART: {
//     return {
//       ...state,
//       cart: [],
//     };
//   }
//   default:
//     return state;
// }
