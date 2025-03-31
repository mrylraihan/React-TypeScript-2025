import React, { PropsWithChildren } from 'react'

type CourseGoalData = {
	id:number, 
	title:string,
}

type CourseProps = PropsWithChildren<CourseGoalData>
const CourseGoals = (props:CourseProps) => {
	console.log(props)
	return (
		<article>
			<div>
				<h2>TITLE :{props.title}</h2>
				{props.children}
			</div>
			<button>Delete</button>
		</article>
	)
}

export default CourseGoals
