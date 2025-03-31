import React from 'react'
import FormTest from './components/FormTest';



function App() {

	const OnSubmitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		console.log('test')
	}
  return (
		<>
			
			<main>
				<FormTest onSubmit={OnSubmitHandler} />
			</main>
		</>
	)
}

export default App
