import React, { useEffect, useState } from 'react'
import ShowAll from './components/ShowAll'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ShowOne from './components/ShowOne'

function App() {
  const [post, setPost]= useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setPost)
    .catch(console.error)
  },[])
  console.log(post)
  return (
		<Router>
			<div>See Our Post</div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/showall' element={<ShowAll post={post} />} />
				<Route path='/showall/:id' element={<ShowOne post={post} />} />
			</Routes>
		</Router>
	)
}

export default App