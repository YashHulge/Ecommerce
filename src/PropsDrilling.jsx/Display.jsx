import React, { useContext } from 'react'
import { NameContext } from './NameContext'

function Display() {
    let name=useContext(NameContext);
  return (
    <div>
      <h1>{name} Welcome to our Website</h1>
    </div>
  )
}

export default Display
