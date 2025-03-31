import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import AllPost from './components/AllPost'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Parent from './components/Parent'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="post" element={<AllPost />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="parent" element={<Parent />}>
        {/* This will default us to first nested route content to show */}
          {/* <Route index element={<Navigate to="test1" replace />} /> */}
        <Route path="test1" element={<Test1 />} />
        <Route path="test2" element={<Test2 />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App