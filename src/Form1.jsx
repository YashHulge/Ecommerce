import React, { useRef } from 'react'

function Form() {
    function handlsubmit(event){
          event.preventDefault();
          console.log("Form is submitted");
          console.log(name.current.value);
          console.log(email.current.value);

    }
    let name=useRef();
    let email=useRef();
  return (
    <div>
      <form onSubmit={handlsubmit}>
        <input type="text" placeholder='Enter Your Name' ref={name}/><br/>
        <input type='email' placeholder='Enter Your Email' ref={email}/><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
