import React, { type ChangeEvent, FormEvent, useState } from 'react'

export type CourseGoalData = {
	title: string
	description: string
}
export type NewGoalProps = {
	addGoal: (title: string, summary: string) => void
}

function NewGoal({addGoal}: NewGoalProps) {
	const [goalData, setGoalData] = useState<CourseGoalData>({
		title: '',
		description: '',
	})

	const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setGoalData((prevData) => {
			return { ...prevData, title: e.target.value }
		})
	}
	const descriptionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setGoalData((prevData) => {
			return { ...prevData, description: e.target.value }
		})
	}
	// console.log(goalData)
	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(goalData)
		addGoal(goalData.title, goalData.description)
		setGoalData({
			title: '',
			description: '',
		})
		// e.currentTarget.reset()WONT WORK BECAUSE EACH INPUT HAS 2 WAY BINDING
	}
	return (
		<div>
			<h1>Make a Goal state</h1>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Title:
						<input
							type='text'
							onChange={titleChangeHandler}
							value={goalData.title}
							placeholder='Enter a Title'
						/>
					</label>
				</div>
				<div>
					<label>
						Description:
						<input
							type='text'
							onChange={descriptionChangeHandler}
							value={goalData.description}
							placeholder='Enter a Description'
						/>
					</label>
				</div>
				<button type='submit'>submit</button>
			</form>
			<form onSubmit={(e) => e}></form>
		</div>
	)
}

export default NewGoal
