import { useState } from "react"
import Button from "./components/Button"
import Form from "./components/Form"
import FormRef from "./components/FormRef"
import Input from "./components/Input"


function App() {
	const[data, setData] = useState<{name:String}>({name:""})
	const onSaveData = (value:unknown)=>{
		const valueInput = value as {name:string}
		setData(valueInput)
	}
	console.log(data)
	return (
		<>
			{/* <main>
				<FormRef/>
			</main> */}
			<main>
				<Form onSave={onSaveData}>
					<Input id='name' label='name' type='text' name='name' />
					<Button>Click me </Button>
				</Form>
			</main>
		</>
	)
}

export default App
