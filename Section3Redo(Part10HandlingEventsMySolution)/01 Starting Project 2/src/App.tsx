import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'

export type CourseGoal = {
	title: string
	description: string
	id: number
}

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([])

	const addGoalHandler = (goal:CourseGoal) => {
		setGoals((prevsGoals) => {
			const newGoal: CourseGoal = goal
			return [...prevsGoals, newGoal]
		})
	}
	const removeGoalHandler = (id: number) => {
		setGoals((prevGoals) => {
			return prevGoals.filter((goal) => goal.id !== id)
		})
		console.log('removed Goal')
	}
	console.log(goals)
	return (
		<>
			<main>
				<Header image={{ src: goalsImg, alt: 'A list of Goals' }}>
					<h1>Your Course Goals</h1>
				</Header>
				<NewGoal addGoal={addGoalHandler} />
				<CourseGoalList goals={goals} onDeleteGoal={removeGoalHandler} />
			</main>
		</>
	)
}
