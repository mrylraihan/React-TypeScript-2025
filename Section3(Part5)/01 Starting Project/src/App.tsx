import { useState } from 'react'

import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import CourseGoals from './components/CourseGoals'
export default function App() {
	const [number, setNumber] = useState<number>(0)
	return (
		<>
			<main>
				<Header image={{ src: goalsImg, alt: 'A List of Goals' }}>
					<h1>Your Course Goals</h1>
				</Header>
				<h1>Let's get started!</h1>
				<CourseGoals num={number} setNum={setNumber} />
			</main>
		</>
	)
}
