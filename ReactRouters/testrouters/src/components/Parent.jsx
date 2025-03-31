import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Parent() {
  return (
    <>
    <div>
        <h1>Parent</h1>
        <ul>
            <Link to='test1'><li>Test1</li></Link>
            <Link to='test2'><li>Test2</li></Link>
        </ul>
    </div>
    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Parent