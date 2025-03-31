import { useRef, useState } from "react"
import Button from "./components/Button"
import Form, { FormHandle } from "./components/Form"
import Input from "./components/Input"


function App() {
	const[data, setData] = useState<{name:String}>({name:""})
	const customForm = useRef<FormHandle>(null)

	const onSaveData = (value:unknown)=>{
		const valueInput = value as {name:string}
		setData(valueInput)
		customForm.current?.clear()
	}
	console.log(data)
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
