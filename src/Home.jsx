import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Home() {
    return (
        <div>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore quidem corrupti deleniti? Earum iste animi tempora ad odio quidem quibusdam quo repellat voluptatem aspernatur. Iure voluptate quaerat provident illum!</p>
            <img src={"https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="photo" />
            <Outlet />
        </div>
    )
}

export default Home
