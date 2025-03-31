import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AllPost() {
    const [allPost, setPost] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(setPost)
        .catch(console.error)
    },[])

  return (
		<div>
			<h1>All Post</h1>
            <ul>
                {allPost.map(ele=>{
                    return <li key={ele.id} onClick={nav.bind(this,`${ele.id}`)}>{ele.title}</li>
                })}
            </ul>
		</div>
	)
}

export default AllPost