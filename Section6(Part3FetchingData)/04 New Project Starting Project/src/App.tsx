import { useEffect, useState } from 'react'
import { get } from './util/http'
import BlogPosts, { BlogPost } from './components/BlogPosts'
import fetchingImg from './assets/data-fetching.png'
import ErrorMessage from './components/ErrorMessage';
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
			const res = (await get(
				'https://jsonplaceholdertypicode.com/posts'
			)) as RawBlogData[]
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
  let content :ReactNode;
  if (fetchedPost.length>0) {
		content = <BlogPosts posts={fetchedPost} />
	}else{
    content = <ErrorMessage text={'Sorry didnt get any data!'}/>
  }
	console.log(fetchedPost)
	return (
		<main>
			{/* <h1>Data Fetching!</h1> */}
			<img src={fetchingImg} alt='image of cat' />
			{content}
		</main>
	)
}

export default App
