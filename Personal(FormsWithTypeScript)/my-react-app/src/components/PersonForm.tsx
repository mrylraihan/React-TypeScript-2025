import React, { useRef } from 'react'
import { Person } from '../App'

function PersonForm({ addPerson }: { addPerson: (person: Person) => void }) {
	const firstName = useRef<HTMLInputElement>(null)
	const lastName = useRef<HTMLInputElement>(null)

	const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(firstName.current!.value)
		console.log(lastName.current!.value)
        addPerson({name:`${firstName.current!.value} ${lastName.current!.value}`, id:0})
		e.currentTarget.reset()
	}
	return (
		<div>
			<form onSubmit={onsubmitHandler}>
				<div>
					<label>
						First Name:
						<input type='text' ref={firstName} />
					</label>
				</div>
				<div>
					<label>
						Last Name:
						<input type='text' ref={lastName} />
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default PersonForm
