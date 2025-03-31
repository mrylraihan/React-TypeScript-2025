import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import Input from './components/Input'
import Form from './components/Form'
import Button from './components/Button'
import Form2 from './components/Form2'
import Input2 from './components/Input2'

function App() {
	const ageRef = useRef<HTMLInputElement>(null)
	const nameRef = useRef<HTMLInputElement>(null)
	const lastNameRef = useRef<HTMLInputElement>(null)
	const firstNameRef = useRef<HTMLInputElement>(null)
	const [fullName, setFullName]= useState('')
	const [address, setAddress] = useState('')
	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(nameRef.current!.value)
		console.log(ageRef.current!.value)
		console.log(address)
		nameRef.current!.value = ''
		ageRef.current!.value = ''
		setAddress('')
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setAddress(e.target.value)
	}
	const onsubmitHandler2 = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(firstNameRef.current!.value)
		console.log(lastNameRef.current!.value)
		setFullName(`${firstNameRef.current!.value} ${lastNameRef.current!.value}`)
		firstNameRef.current!.value = ''
		lastNameRef.current!.value = ''
	}
	return (
		<>
			<main>
				<Form onSubmit={onSubmitHandler}>
					<Input label='name' id='name' ref={nameRef} />
					<Input label='age' id='age' type='number' ref={ageRef} />
					<Input
						label='address'
						id='address'
						type='text'
						onChange={onChangeHandler}
						value={address}
					/>
					<Button type='submit'>Click me</Button>
				</Form>
				<h3>new form : {fullName}</h3>
				<Form2 onSubmit={onsubmitHandler2}>
					<Input2
						label='first-Name'
						id='first-Name'
						type='text'
						ref={firstNameRef}
					/>
					<Input2
						label='last-Name'
						id='last-Name'
						type='text'
						ref={lastNameRef}
					/>
					<Button type='submit'>Submit FullName</Button>
				</Form2>
			</main>
		</>
	)
}

export default App
