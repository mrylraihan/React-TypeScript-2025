import React from 'react'
import Button from './components/Button';


function App() {

  return (
		<>
			<main>
				<p>
					{/* <Button href='https://nike.com' disabled onClick={() => console.log('hello')}>
						A Button
					</Button> */}
					<Button onClick={() => console.log('hello')}>
						A Button
					</Button>
				</p>
				<p>
					<Button href='https://nike.com' target='_blank'>
						A Link
					</Button>
				</p>
			</main>
		</>
	)
}

export default App
