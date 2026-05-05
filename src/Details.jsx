import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    
        let [product, setproduct]=useState({})
        let {id}=useParams();

        useEffect(()=>{
            fetch(`https://dummyjson.com/products/${id}`).then((res)=>{
                res.json().then((result)=>{
                    console.log(result);
                    setproduct(result)
                })
            })
        },[id])
    
  return (
    <div>
      <h1>Details</h1>
      <div className='container'>
                          <h2>{product.title}</h2>
                          <h2>{product.category}</h2>
                           <h2>{product.price}</h2>
                           <p>{product.description}</p>
                         
                           <img src={product.thumbnail} alt="" />
                      </div>
    </div>
  )
}

export default Details
