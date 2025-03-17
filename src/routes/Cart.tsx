import React from "react";
import { CART } from "../contextApi";

const Cart = () => {
  const { cart } = CART.store();

  const index = cart.findIndex(ci=>?ci.id=== item.id)
  if(index<0  ){
    cart.push({...index,quan:1 })

  }else{
    cart[index].quan+=1
  }
  return <div>Cart</div>;
};

export default Cart;
