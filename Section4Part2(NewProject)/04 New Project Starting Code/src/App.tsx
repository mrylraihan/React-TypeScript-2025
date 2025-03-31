import React from 'react'
import Input from './components/Input'


function App() {

	
  return (
		<>
			<div>
				<h1>Let's get started!</h1>
				<Input type={'text'} label={'Your Name'} id={'textId'} />
				<Input type={'number'} label={'Your Age'} id={'numberId'} />
			</div>
			
		</>
	)
}

export default App
