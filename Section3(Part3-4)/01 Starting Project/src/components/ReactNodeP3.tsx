import React, {type PropsWithChildren } from 'react'

type PropsObj = {
  firstName:string,
  lastName:string,
}

function ReactNodeP3(props: PropsWithChildren<PropsObj>) {
	console.log(props)
	return (
		<div>
			<h1>ReactNodeP3</h1>
			<h2>{props.firstName}</h2>
			<h2>{props.lastName}</h2>
			<p>{props.children}</p>
		</div>
	)
}

export default ReactNodeP3