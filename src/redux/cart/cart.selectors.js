
// selector helps to memoize, no change in object => lesser rerender if selected value doesn't changes
import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
  );

// output selector gives cartItems
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// output selector gives cartItem Count
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// output selector gives CartTotal Count
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);