import React from 'react'
import { type CourseGoal as CourseGoalType} from '../App'
import CourseGoals from './CourseGoals'

type CourseGoalListProps = {
    goals: CourseGoalType[]
}
function CourseGoalList({goals}:CourseGoalListProps) {
  return (
    <ul>
		{goals.map((goal)=><li key={goal.id}><CourseGoals title={goal.title} id={goal.id}>
			<p>{goal.description}</p>
			</CourseGoals></li>)}
	</ul>
  )
}

export default CourseGoalList