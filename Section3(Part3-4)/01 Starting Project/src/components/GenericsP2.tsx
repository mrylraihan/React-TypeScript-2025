import React,{type PropsWithChildren} from 'react'

type Data<T,U> = {
    name:T,
    number:U
}

const GenericsP2: React.FC<PropsWithChildren<Data<string, number>>> = (
	props
) => {
	console.log(props)
	return (
		<div>
			<h1>GenericsP2</h1>
			<p>{props.name}</p>
			<p>{props.number}</p>
			<p>{props.children}</p>
		</div>
	)
}

export default GenericsP2