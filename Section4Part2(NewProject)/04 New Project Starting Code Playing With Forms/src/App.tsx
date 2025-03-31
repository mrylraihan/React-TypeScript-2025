import React,{FormEvent} from 'react'
import Input from './components/Input'


function App() {

	 const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
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
			<div>
				<h1>Let's get started!</h1>
				{/* <Input type={'text'} label={'text'} id={'textId'} />
				<Input type={'number'} label={'number'} id={'numberId'} /> */}
			</div>
			<div>
				<h1>Form Test</h1>
				<form onSubmit={onSubmitHandler}>
					<Input type={'text'} label={'text'} id={'textId'} name={'textData'}/>
					<Input type={'number'} label={'number'} id={'numberId'} name={'numberData'} />
					<button type='submit'>Submit</button>
				</form>
			</div>
			<div>
				<h1>Form Test</h1>
				<form onSubmit={onSubmitHandler}>
					<label htmlFor={"textData"}>Type: {"Text Data"}</label>
					<input id={"textData"} type={"text"} name="textData"/>
					<label htmlFor={"numberData"}>Type: {"Number Data"}</label>
					<input id={"numberData"} type={"number"} name='numberData'/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</>
	)
}

export default App
