import React, {type FC, type PropsWithChildren, type ReactNode } from 'react'

type CourseGoalProps = PropsWithChildren<propsData>
// interface propsData {title:string, description:string, children?:ReactNode}
// interface propsData {title:string, description:string, children?:any}
type propsData = { title: string }

function CourseGoal(props: CourseGoalProps) {
	console.log(props)
	return (
		<article>
			<div>
				<h2>{props.title}</h2>
				{props.children}
			</div>
			<button onClick={()=>console.log("Hello")}>Delete</button>
		</article>
	)
}

export default CourseGoal
