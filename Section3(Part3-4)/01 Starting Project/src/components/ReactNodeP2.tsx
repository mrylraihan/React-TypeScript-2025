import React, {type ReactNode } from 'react'

type PropsObj = {
  firstName:string,
  lastName:string,
  children?:ReactNode
}

function ReactNodeP2(props: PropsObj) {
	return (
		<div>
			<h1>ReactNodeP2</h1>
			<h2>{props.firstName}</h2>
			<h2>{props.lastName}</h2>
			<p>{props.children}</p>
		</div>
	)
}

export default ReactNodeP2