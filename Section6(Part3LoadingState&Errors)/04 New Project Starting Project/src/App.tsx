import { ReactNode, useEffect, useState } from 'react'
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
	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState<string>("")
	useEffect(() => {
		const fetchPosts = async () => {
			setIsFetching(true)
			try{
				const res = (await get(
					'https://jsonplaceholder.typicode.com/posts'
					// 'https://sonplaceholder.typicode.com/posts'
				)) as RawBlogData[]
				const convertedData: BlogPost[] = res.map((data) => {
					return {
						id: data.id,
						title: data.title,
						text: data.body,
					}
				})
				setFetchedPost(convertedData)
			}catch(error){
				// console.log((error as Error).message)
				// setError((error as Error).message) or
				if(error instanceof Error){
					setError(error.message)
					console.log(error.message)
				}
			}
			setIsFetching(false)
		}
		fetchPosts()
	}, [])
  let content :ReactNode;
  if (fetchedPost.length>0) {
		content = <BlogPosts posts={fetchedPost} />
	}else if(error) {
		content = <ErrorMessage text={error} />
	}

  if(isFetching){
	content = <p id='loading-fallback'>Fetching Data ....</p>
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
