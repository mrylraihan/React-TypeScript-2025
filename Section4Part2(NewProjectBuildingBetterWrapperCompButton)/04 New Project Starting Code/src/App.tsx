import React from 'react'
import Button from './components/Button';


function App() {

  return (
		<>
			<main>
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
			</main>
		</>
	)
}

export default App
