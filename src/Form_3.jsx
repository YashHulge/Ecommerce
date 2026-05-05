import React from 'react'
import { useForm } from 'react-hook-form'

function Form_3() {
    let{handleSubmit, register, reset}=useForm();

    function display(data){
        console.log(data);
        reset()
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit(display)}>
        <input type='text' placeholder='Enter name' {...register("name")}/><br/>
        <input type='email' placeholder='Enter email' {...register("email")}/><br/>
        <input type='password' placeholder='Enter password' {...register("password")}/><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form_3
