import React, { useContext, useEffect, useState } from 'react'
import './product.css'
import Loading from './Loading'
import { Link, useNavigate } from 'react-router-dom'
import cart from './Cart'
import { CartContext } from './Context.jsx/CartContext'

function Product() {
    let [products, setproducts]=useState([])
    let [url, seturl]=useState(["https://dummyjson.com/products"])
    let [loading, setLoading]=useState(true)
    let {carts, setcarts}=useContext(CartContext);
   async function fetchdata(){
        let data= await fetch(url)
        let response = await data.json();
        
        
        setproducts(response.products);
        setLoading(false)
        
    }

    useEffect(()=>{
      setTimeout(()=>{
        fetchdata()
      }, 1000)
    },[url])
    
    let navigate=useNavigate()
    function AddToCart(product){
      //  let user=JSON.parse(localStorage.getItem("user"));
      
       
      if(localStorage.getItem("islogedin")==="true"){
             let products=[...carts, product];
    setcarts(products);   
  
    
    
      }
      else{
        navigate("/register")
      }
       
 
    }

  return (
    <div >
      <h1>This is Product</h1>
      <button onClick={()=>{seturl("https://dummyjson.com/products")}}>ALL</button>
      <button onClick={()=>{seturl("https://dummyjson.com/products/category/beauty")}}>Beauty</button>
      <button onClick={()=>{seturl("https://dummyjson.com/products/category/fragrances")}}>Fragrances</button>
      <button onClick={()=>{seturl("https://dummyjson.com/products/category/furniture")}}>Furniture</button><br />

      {
        loading? <Loading/> : (
        <>
        {
        products.map((product)=>{
            return(
                <div className='container' key={product.id}>
                    <h2>{product.title}</h2>
                    <h2>{product.category}</h2>
                     <h2>{product.price}</h2>
                     <p>{product.description}</p>
                     <Link to={`/details/${product.id}`}>Read More..</Link><br /><br />
                      <img src={product.thumbnail} alt="" /><br /><br />
                      <button onClick={()=>{AddToCart(product)}}>  ADD TO CART</button>
                </div>
            )
        })
      }
        </>
      )
      }
    </div>
  )
}

export default Product
