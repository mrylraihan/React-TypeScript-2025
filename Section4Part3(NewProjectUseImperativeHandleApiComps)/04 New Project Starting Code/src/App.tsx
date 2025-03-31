import Button from './components/Button'
import Form from './components/Form'
import Input from './components/Input'
import { useRef } from 'react';
import { FormHandle } from './components/Form';
function App() {
	const customForm = useRef<FormHandle>(null)
	const onSaveData = (value: unknown) => {
		const valueInput = value as { name: string }
		console.log(valueInput)
		customForm.current?.clear()
	}

	return (
		<>
			<main>
				<Form onSave={onSaveData} ref={customForm}>
					<Input id='name' label='name' type='text' name='name' />
					<Button>Click me </Button>
				</Form>
			</main>
		</>
	)
}

export default App
