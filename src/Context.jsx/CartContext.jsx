import { createContext, useState } from "react";

export let CartContext=createContext();

function CartProvider(props){

    let [carts, setcarts]=useState([]);

    return(
        <CartContext.Provider value={{carts, setcarts}}>
           {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider