import React from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

function App() {
	return (
		<>
			<main>
				<h1>Home</h1>
			</main>
			<main>
				<Comp1 username='WallieUser' userState={true} type='user' />
				<Comp1 username='AdminUser' adminState={true} type='admin' />
			</main>
      <main>
        <Comp2 type="Dev" name='Wallie R' languages={['Java', 'Javascript']}/>
        <Comp2 type="PM" name='Hisham R' projects={['Bank Ting', 'Tennis Ting']}/>
      </main>
		</>
	)
}

export default App
