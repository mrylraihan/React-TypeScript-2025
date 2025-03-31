import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>Navbar</h1>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/post'><li>Post</li></Link>
            <Link to='/parent'><li>Nested Routes Example</li></Link>
         
        </ul>
    </div>
  )
}

export default Navbar