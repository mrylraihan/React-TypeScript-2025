import React from 'react'
import Input from './components/Input'


function App() {

  return (
		<>
			<main>
				<h1>Let's get started!</h1>
				<Input type={'text'} label={'Your Name'} id={'textId'} />
				<Input type={'number'} label={'Your Age'} id={'numberId'} disabled />
			</main>
		</>
	)
}

export default App
