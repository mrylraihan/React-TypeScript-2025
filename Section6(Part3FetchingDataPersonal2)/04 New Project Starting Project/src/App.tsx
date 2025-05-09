import { useEffect, useState } from "react";
import { get } from "./util/http";
import BlogPosts from "./components/BlogPosts";
type UserData = {
	userId: number
	id: number
	title: string
	body: string
}

type BlogData = UserData[]
function App() {
  const [post, setPost] = useState<UserData[]>([])
  useEffect(()=>{
    get('https://jsonplaceholder.typicode.com/posts')
    .then(setPost)
    .catch(console.error)
  },[])
  console.log(post)
  return (
		<>
			<h1>Data Fetching!</h1>
      <BlogPosts posts={post}/>
		</>
	)
}

export default App;
