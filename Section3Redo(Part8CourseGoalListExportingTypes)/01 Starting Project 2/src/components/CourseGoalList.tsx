import React from 'react'
import CourseGoal from './CourseGoal'
import { type CourseGoal as CourseGoalType } from '../App'

type CourseGoalListProps = {
	goals: CourseGoalType[]
}
function CourseGoalList({goals}:CourseGoalListProps) {
  return (
		<ul>
			{goals.map((goal) => {
				return (
					<li key={goal.id}>
						<CourseGoal title={goal.title}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				)
			})}
		</ul>
	)
}

export default CourseGoalList
