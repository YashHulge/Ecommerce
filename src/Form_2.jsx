import React, { useState } from 'react'

export default function Form_2() {
    let [name,setname]=useState("");
    let [email,setemail]=useState("");

    function handlesubmit(e) {
        e.preventDefault()
        console.log(name);
        console.log(email);
        
        
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>{setname(e.target.value)}}/><br/>
        <input type='email' placeholder='Enter Your Email' onChange={(e)=>{setemail(e.target.value)}}/><br/>
        <button>Submit</button>
      </form>
      <h1>{name}</h1>
    </div>
  )
}
