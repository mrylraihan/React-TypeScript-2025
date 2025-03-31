import React, { type FormEvent } from 'react'
import { CourseGoal } from '../App'

type formDataGoal = {
	goal?: string
	summary?: string
}

function NewGoal(props: { addGoal: (goal: CourseGoal) => void }) {
	const [goal, setGoal] = React.useState<formDataGoal>({
		goal: '',
		summary: '',
	})

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('Test')
		let id = Math.random()
		const formData = new FormData(event.currentTarget)
		const formDataObject: formDataGoal = Object.fromEntries(formData.entries())
		setGoal(formDataObject)
		let goal: CourseGoal = {
			id: id,
			title: formDataObject.goal!,
			description: formDataObject.summary!,
		}
		console.log(formDataObject, 'Form')
		props.addGoal(goal)
		event.currentTarget.reset()
	}
	console.log(goal, 'state form')
	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input id='goal' type='text' name='goal' />
			</p>
			<p>
				<label htmlFor='summary'>Your Goal</label>
				<input id='summary' type='text' name='summary' />
			</p>
			<p>
				<button type='submit'>Add Goal</button>
			</p>
		</form>
	)
}

export default NewGoal
