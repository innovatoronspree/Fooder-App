//we are naming the file with small letter, to differentiate it from
//a component
import React from "react";

//We are creating default data, not used
//but gives better auto-completion


const CartContext = React.createContext({
  items: [],
  totalItem: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;