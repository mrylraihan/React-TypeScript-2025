import Input from './components/Input'
import Form from './components/Form'
import Button from './components/Button'
import Form2 from './components/Form2'

function App() {

	const handleSave = (data:unknown)=>{
		const extractedData = data as {name:string, age:string}
		console.log(extractedData)
	}
	const handleSaveCity = (data:unknown)=>{
		const extractedData = data as {address:string, city:string}
		console.log(extractedData)
	}
	return (
		<>
			<main>
				<Form onSave={handleSave}>
					<Input label='address' id='address' type='text' />
					<Input label='city' id='city' type='text' />
					<Button type='submit'>Submit</Button>
				</Form>
			</main>
			<main>
				<Form2 onSave={handleSaveCity}>
					<Input label='name' id='name' type='text' />
					<Input label='age' id='age' type='text' />
					<Button type='submit'>Submit</Button>
				</Form2>
			</main>
		</>
	)
}

export default App
