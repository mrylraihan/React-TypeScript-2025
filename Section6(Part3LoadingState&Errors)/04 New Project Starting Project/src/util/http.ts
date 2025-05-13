// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
// type UserData = {
// 	userId: number
// 	id: number
// 	title: string
// 	body: string
// }

// type BlogData = UserData[]

export async function get(url:string) {
	const response = await fetch(url)
	// const data = await response.json()
	
    if(!response.ok){
        throw new Error("Failed to Fetch Data.")
    }
    const data = await response.json() as unknown
    return data
}