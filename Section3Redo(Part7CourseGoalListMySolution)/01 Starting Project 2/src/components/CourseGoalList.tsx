import React from 'react'
import CourseGoal from './CourseGoal'
type CourseGoal = {
	title: string
	description: string
	id: number
}
type CourseGoalProps = {
	goals: CourseGoal[]
	removeGoal: (num: number) => void
}

function CourseGoalList(props: CourseGoalProps) {
	return (
		<ul>
			{props.goals.map((goal: CourseGoal) => {
				return (
					<li key={goal.id}>
						<CourseGoal
							title={goal.title}
							description={goal.description}
							id={goal.id}
							removeGoal={props.removeGoal}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default CourseGoalList
