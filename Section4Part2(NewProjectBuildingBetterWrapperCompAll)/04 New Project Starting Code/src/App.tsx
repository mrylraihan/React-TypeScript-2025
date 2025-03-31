import React from 'react'
import Input from './components/Input'
import FormTest from './components/FormTest';
import Button from './components/Button';


function App() {

	const OnSubmitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		console.log('test')
	}
  return (
		<>
			<div>
				<h1>Let's get started!</h1>
				<Input type={'text'} label={'Your Name'} id={'textId'} />
				<Input type={'number'} label={'Your Age'} id={'numberId'} disabled />
			</div>
			<div>
				<FormTest onSubmit={OnSubmitHandler} />
			</div>
			<div>
				<p>
				<Button el='button' onClick={() => console.log('hello')}>
					A Button
				</Button>
				</p>
				<p>
				<Button el='anchor' href='https://nike.com'>
					A Link
				</Button>
				</p>
			</div>
		</>
	)
}

export default App
