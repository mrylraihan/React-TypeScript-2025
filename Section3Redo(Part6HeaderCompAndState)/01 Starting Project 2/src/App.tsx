import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import { useState } from 'react'

type CourseGoal = {
	title: string
	description: string
	id: number
}

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([])

	const addGoalHandler = () => {
		setGoals((prevsGoals) => {
			const newGoal: CourseGoal = {
				title: 'First Goal',
				description: 'First Goal Description',
				id: Math.random(),
			}
			return [...prevsGoals, newGoal]
		})
	}
	const removeGoalHandler = (id:number) =>{
		setGoals((prevGoals) => {
			return prevGoals.filter(goal=>goal.id!==id)
		})
		console.log("removed Goal")

	}
	console.log(goals)
	return (
		<>
			<main>
				<Header image={{ src: goalsImg, alt: 'A list of Goals' }}>
					<h1>Your Course Goals</h1>
				</Header>
				<button onClick={addGoalHandler}>Add Goal</button>
				<ul>
					{goals.map((goal) => {
						return (
							<li key={goal.id}>
								<CourseGoal
									title={goal.title}
									description={goal.description}
									id={goal.id}
									removeGoal={removeGoalHandler}
								/>
							</li>
						)
					})}
				</ul>
			</main>
		</>
	)
}
