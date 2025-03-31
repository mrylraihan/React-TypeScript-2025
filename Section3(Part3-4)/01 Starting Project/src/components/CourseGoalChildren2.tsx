import React, { ReactNode } from 'react'
type CourseGoalProps ={
    title:string,
    // children: ReactNode
}
const CourseGoalChildren2: React.FC<{title:string, children?:any}> = ({
	title,
	children,
}) => {
	console.log(title)
	console.log(children)
	return (
		<div>
			<h1>{title} 2</h1>
			{children}
		</div>
	)
}

export default CourseGoalChildren2