import Button from "./components/Button"
import FormTest from "./components/FormTest"
import Input from "./components/Input"

function App() {
	return (
		<>
			<main>
				<FormTest>
					<Input
						type='text'
						name='name'
						placeholder='Enter your name'
						label='name'
						id='name'
					/>
					<Input
						type='text'
						name='age'
						placeholder='Enter your age'
						label='age'
						id='age'
					/>
					<Button type='submit'>Save</Button>
				</FormTest>
			</main>
		</>
	)
}

export default App
