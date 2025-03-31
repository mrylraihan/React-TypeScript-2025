import React, {type ReactNode } from 'react'


function ReactNodeP1(props:{firstName:string, lastName:string, children?:ReactNode}) {

  return (
		<div>
			<h1>ReactNodeP1</h1>
            <h2>{props.firstName}</h2>
            <h2>{props.lastName}</h2>
            <p>{props.children}</p>
		</div>
	)
}

export default ReactNodeP1