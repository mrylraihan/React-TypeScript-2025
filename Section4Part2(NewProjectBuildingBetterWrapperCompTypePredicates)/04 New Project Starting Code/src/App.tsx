import React from 'react'
import Button from './components/Button';
import Button2 from './components/Button2';


function App() {

  return (
		<>
			<main>
				<p>
					<Button onClick={() => console.log('hello')}>A Button</Button>
				</p>
				<p>
					<Button href='https://nike.com'>A Link</Button>
				</p>
			</main>
			<main>
				<Button2 el='button' onClick={()=>console.log("test")}>Button 2</Button2>
				<Button2
					el='anchor'
					href='https://www.nike.com/t/p-6000-mens-shoes-XkgpKW/HQ3030-200'
					target='_blank'>
					Anchor 2
				</Button2>
			</main>
		</>
	)
}

export default App
