import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

type POST = {
	userId: number
	id: number
	title: string
	body: string
}

function ShowOne({ post }: { post: POST[] }) {
	const nav = useNavigate()
	const params = useParams()
	const id = params?.id
	console.log(id)
	let singlePost
	if(id){
	singlePost = post.find((p: POST) => p.id === parseInt(id))
	}
	return (
		<div>
			{id && <main>
				<h1>Show One</h1>
				<h2>{singlePost?.title}</h2>
				<p>{singlePost?.body}</p>

				<button onClick={() => nav('/')}>Go Back Home</button>
			</main>}
			{!id && <h1>Sorry Not Found</h1>}
		</div>
	)
}

export default ShowOne
