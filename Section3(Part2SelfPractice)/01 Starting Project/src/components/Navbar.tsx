import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
		<div className='nav'>
			<h1>Navbar</h1>
            <ul>
                <Link to='/'><li className='navli'>Home</li></Link>
                <Link to='/showall'><li className='navli'>Post</li></Link>
            </ul>
		</div>
	)
}

export default Navbar