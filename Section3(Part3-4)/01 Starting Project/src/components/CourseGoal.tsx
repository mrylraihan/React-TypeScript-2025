import React from 'react'

type CourseGoalProps = {
	title: string,
	description: string,
}
// function CourseGoal(props: { title: string; description: string }) {
function CourseGoal({ title, description }: CourseGoalProps) {
	console.log({ title, description })
	return (
		<article>
			<div>
				<h2>TITLE: {title}</h2>
				<p>DESCRIPTION: {description}</p>
			</div>
			<button>Delete</button>
		</article>
	)
}

export default CourseGoal
