import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function App() {
  
  let status=localStorage.getItem("islogedin");
  let nav=useNavigate()
  function logout(){
    localStorage.removeItem("islogedin")
    nav("/login")
  }
  return (
    <>
     <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/product"}>Products</NavLink>
      <NavLink>About</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/carts"}>Cart</NavLink>
      {status? <button onClick={logout}>Logout</button>:<NavLink to="/login">Login</NavLink>}
      {status&&<AccountBoxIcon onClick={()=>{nav('/profile')}}/>}
      
     </nav>
     <Outlet/>
    </>
  )
}

export default App
