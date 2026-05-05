import React from 'react'

function Profile() {
    let user= JSON.parse(localStorage.getItem("user"))
   
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.password}</h2>
      <button >Delete Account</button>
    </div>
  )
}

export default Profile
