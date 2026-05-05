import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
function Register() {
    let {handleSubmit, register , reset}= useForm()
    let nav = useNavigate()
    function res(user){
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user))

      nav("/login")
      
    }
    
   

  
  return (
    <div>
       <Form onSubmit={handleSubmit(res)}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" {...register("name")}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter password" {...register("password")}/>
      </Form.Group>
      
      <button>Submit</button>
    </Form>
    </div>
  )
}

export default Register
