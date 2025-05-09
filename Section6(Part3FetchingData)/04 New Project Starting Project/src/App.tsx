import { useEffect, useState } from 'react'
import { get } from './util/http'
import BlogPosts,{BlogPost} from './components/BlogPosts'
import fetchingImg from './assets/data-fetching.png'
type RawBlogData = {
	userId: number
	id: number
	title: string
	body: string
}

// type BlogData = UserData[]
function App() {
	const [fetchedPost, setFetchedPost] = useState<BlogPost[]>([])
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await get('https://jsonplaceholder.typicode.com/posts') as RawBlogData[]
			const convertedData: BlogPost[] = res.map((data) => {
				return {
					id: data.id,
					title: data.title,
					text: data.body,
				}
			})
      setFetchedPost(convertedData)

		}
		fetchPosts()
	}, [])
	console.log(fetchedPost)
	return (
		<main>
			{/* <h1>Data Fetching!</h1> */}
			<img src={fetchingImg} alt='image of cat' />
			<BlogPosts posts={fetchedPost} />
		</main>
	)
}

export default App
