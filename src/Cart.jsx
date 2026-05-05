import React, { useContext } from 'react'
import { CartContext } from './Context.jsx/CartContext'
import { Link } from 'react-router-dom';
import "./product.css"
function Cart() {
      let {carts, setcarts}=useContext(CartContext);
      console.log(carts);
function removefromcart(product){
  let filterdata=carts.filter((item)=>{
    return(
      item!=product
    )
  })
  setcarts(filterdata)
}
    return (
    <div  >
      {
        carts.map((product)=>{
             return(
                <div className='container'>
                    <h2>{product.title}</h2>
                    <img src={product.thumbnail} alt="" />
                                    <h2>{product.category}</h2>
                                     <h2>{product.price}</h2>
                                     <p>{product.description}</p>
                                     <Link to={`/details/${product.id}`}>Read More..</Link><br /><br />
                                     <button onClick={()=>{removefromcart(product)}}> Remove Item</button>
                                     
            
                </div>
             )
        })
      }
    </div>
  )
}

export default Cart
