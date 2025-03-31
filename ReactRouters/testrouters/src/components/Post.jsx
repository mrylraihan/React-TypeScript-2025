import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Post() {
    const [post, setPost]=useState('')
    const nav = useNavigate()
    const params = useParams()
    const id = params.id

    useEffect(() => {
			fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then((res) => res.json())
				.then(setPost)
				.catch(console.error)
		}, [])

    console.log(id)
    console.log(post)
    return (
		<div>
			<h1>Post :{id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
            <button onClick={nav.bind(this,-1)}>Show all again</button>
		</div>
	)
}

export default Post