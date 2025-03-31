import React from 'react'
import { useNavigate } from 'react-router-dom'

type POST = {
	userId: number
	id: number
	title:string
	body: string
}


function ShowAll({post}:{post: POST[]}) {
  const nav = useNavigate()
  console.log(post)
  return (
    <div>
      <h1>Show All</h1>
      <ul>
        {post.map((ele:POST)=>{
          return <li key={ele.title} onClick={()=>nav(`${ele.id}`)}>{ele.title}</li>
        })}
      </ul>
    </div>
  )
}

export default ShowAll