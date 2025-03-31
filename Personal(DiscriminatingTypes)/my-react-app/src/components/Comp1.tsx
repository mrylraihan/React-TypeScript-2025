type Admin = {
	type: 'admin' // Discriminant
	adminState: boolean
	username: string
}

type User = {
	type: 'user' // Discriminant
	userState: boolean
	username: string
}

type LoginProps = Admin | User

function Comp1(props: LoginProps) {
	if (props.type === 'user') {
		// Narrowed to User
		const { username, userState } = props
		console.log(props, 'user')
		return <div>hello {username+""+userState}</div>
	}

	// Narrowed to Admin
	const { username, adminState } = props
	console.log(props, 'admin')
	return <div>hello admin {username+'' + adminState}</div>
}

export default Comp1
