import React from 'react'
import Button from './components/Button'
import Container from './components/Container'
import Container2 from './components/Container2'
import TestComp from './components/TestComp'
import TestComp2 from './components/TestComp2'

function App() {
	const ClickMe = () => console.log('I was Clicked!')

	const OnSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Wayel Raihan')
		console.log(e.currentTarget)
		const formData = new FormData(e.currentTarget)
		console.log(formData)
		const data = Object.fromEntries(formData.entries())
		console.log(data)
		e.currentTarget.reset()
	}
	return (
		<>
			{/* <main>
				<Container as={Button} onClick={ClickMe} />
			</main>
			<main>
				<Container as={Button} onClick={ClickMe}>
					Click me
				</Container>
			</main>
			<main>
				<Container2 as='p' style={{color:'red'}}>this is a p-tag</Container2>
			</main>
			<main>
				<Container2 as='button' onClick={ClickMe}>this is a button</Container2>

			</main> */}
			{/* <main>
				<TestComp as='button' onClick={ClickMe}>
					Test button
				</TestComp>
			</main>
			<main>
				<TestComp as='input' type='text' placeholder='type name here' />
			</main>
			<main>
				<TestComp as='form' onSubmit={OnSubmitHandler}>
					<TestComp as='h1'>Form</TestComp>
					<TestComp
						as='input'
						type='text'
						name='name'
						placeholder='type name here'
					/>
					<TestComp
						as='input'
						type='number'
						name='age'
						placeholder='type age here'
					/>
					<TestComp as='button' type='submit'>
						Test Form
					</TestComp>
				</TestComp>
			</main> */}
			<main>
				<TestComp2 is='h1'>Testing Component Container</TestComp2>
				<TestComp2 is='form' onSubmit={OnSubmitHandler}>
				<TestComp2 is='input' type='text' placeholder='write name here'name='name'/>
				<TestComp2 is='button' type='submit'>im a button</TestComp2>
				</TestComp2>
			</main>
		</>
	)
}

export default App
