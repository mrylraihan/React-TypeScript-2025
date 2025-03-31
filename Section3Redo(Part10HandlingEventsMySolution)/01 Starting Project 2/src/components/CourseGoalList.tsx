import React from 'react'
import CourseGoal from './CourseGoal'
import { type CourseGoal as CourseGoalType } from '../App'

type CourseGoalListProps = {
	goals: CourseGoalType[],
	onDeleteGoal: (id:number)=>void
}
function CourseGoalList({goals, onDeleteGoal}:CourseGoalListProps) {
  return (
		<ul>
			{goals.map((goal) => {
				return (
					<li key={goal.id}>
						<CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				)
			})}
		</ul>
	)
}

export default CourseGoalList
