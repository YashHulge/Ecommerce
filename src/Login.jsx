import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login() {
      
   
    let[name, setname]=useState("");
    // localStorage.setItem("islogedin", "false")
    let[password, setpassword]=useState("")
      
    let [msg, setmsg]=useState(false)
     let nav=useNavigate()
    function loginuser(e){
      e.preventDefault();
      let user= JSON.parse(localStorage.getItem("user"))
      if(name==user.name && password == user.password){
        localStorage.setItem("islogedin", "true")
        nav("/")
      }
      else{
        setmsg(true)
      }
    }
    return (
    <div>
      <h1>Login Form</h1>
       <Form onSubmit={loginuser}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setname(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword"> 
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>{setpassword(e.target.value)}}/>
      </Form.Group>
   
      <button>Submit</button>
    </Form>
    </div>
  )
}

export default Login
