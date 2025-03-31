import React, {PropsWithChildren, type ReactNode } from 'react'

type CourseGoalProps = PropsWithChildren<propsData>
// interface propsData {title:string, description:string, children?:ReactNode}
// interface propsData {title:string, description:string, children?:any}
type propsData = {title:string, description:string}

function CourseGoal(props: CourseGoalProps) {
	// function CourseGoal(props:{title:string, description:string}) {
	console.log(props)
	return (
		<article>
			<div>
				<h2>{props.title}</h2>
				<p>{props.description}</p>
				{props.children}
			</div>
			<button>Delete</button>
		</article>
	)
}

export default CourseGoal
