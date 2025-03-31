import React from 'react'
import { type ReactNode } from 'react'

const TestComp3: React.FC<{
	number: number | string
	children?: ReactNode
}> = ({ number, children }) => {
	return (
		<div>
			<h1>Test Comp: {number}</h1>
			<p>{children}</p>
		</div>
	)
}

export default TestComp3