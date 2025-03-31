import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'
import NewGoal1 from './components/NewGoalRef'
import TestForm from './components/TestForm'

export type CourseGoal = {
	title: string
	description: string
	id: number
}

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([])

	const addGoalHandler = (title:string, description:string) => {
		setGoals((prevsGoals) => {
			const newGoal: CourseGoal = {
				title: title,
				description: description,
				id: Math.random(),
			}
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
				<CourseGoalList goals={goals} onDeleteGoal={removeGoalHandler} />
			</main>
			<main>
				<NewGoal addGoal={addGoalHandler} />
			</main>
			<main>
				<NewGoal1 addGoal={addGoalHandler} />
			</main>
			<main>
				<TestForm/>
			</main>
		</>
	)
}
