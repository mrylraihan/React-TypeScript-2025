// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
type UserData = {
	userId: number
	id: number
	title: string
	body: string
}

type BlogData = UserData[]

export async function get(): Promise<BlogData> {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()
	return data
}