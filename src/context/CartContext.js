import React from 'react'

const CartContext = React.createContext({          // we can use the context for simple pass the props throughout the all routes 
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
