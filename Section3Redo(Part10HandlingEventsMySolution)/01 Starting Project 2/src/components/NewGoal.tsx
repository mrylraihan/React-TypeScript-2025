import React, { ChangeEvent, useState, type FormEvent } from 'react'
import { CourseGoal } from '../App'

function NewGoal(props: { addGoal: (goal: CourseGoal) => void }) {
	const [goalInput, setGoalInput] = useState<string>('')
	const [summaryInput, setSummaryInput] = useState<string>('')

	const goalOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setGoalInput(e.target.value)
	}
	const summaryOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSummaryInput(e.target.value)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('Test')
		let id = Math.random()
		if (goalInput.trim() != '' && summaryInput.trim() != '') {
			let newGoal = {
				id: id,
				title: goalInput,
				description: summaryInput,
			}
			props.addGoal(newGoal)
			setGoalInput('')
			setSummaryInput('')
		} else {
			alert('Please fill in both fields')
		}
	}
	console.log(goalInput)
	console.log(summaryInput)

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input
					id='goal'
					type='text'
					value={goalInput}
					onChange={goalOnChangeHandler}
				/>
			</p>
			<p>
				<label htmlFor='summary'>Your Goal</label>
				<input
					id='summary'
					type='text'
					value={summaryInput}
					onChange={summaryOnChangeHandler}
				/>
			</p>
			<p>
				<button type='submit'>Add Goal</button>
			</p>
		</form>
	)
}

export default NewGoal
