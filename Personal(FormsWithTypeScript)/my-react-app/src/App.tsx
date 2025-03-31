import { useState } from 'react'
import './App.css'
// import AnotherWayComp from './components/AnotherWayComp';
// import CompsWithProps from './components/CompsWithProps';
// import Form1 from './components/Form1';
// import Form2 from './components/Form2';
// import Form3 from './components/Form3';
import PersonList from './components/PersonList'
import PersonForm from './components/PersonForm'

export type Person = {
	name: string
	id: number
}
function App() {
	const [list, setList] = useState<Person[]>([])
	console.log(list)
	console.log('App')

	const addPerson = (person: Person) => {
		person.id = list.length + 1
		setList((prev: Person[]) => {
			return [...prev, person]
		})
	}
  const removePerson = (id:number)=>{
    setList(list.filter(person=>person.id!==id))
  }
	return (
		<>
			<h1>Forms With React Typescript</h1>
			<div>
				{/* Form Data with New Form Data no State */}
				{/* <Form1/> */}
				{/* State and onChange */}
				{/* <Form2/> */}
				{/* with Refs */}
				{/* <Form3/> */}
				{/* Props with Children */}
				{/* <CompsWithProps name='mike' address='123 street'>test children</CompsWithProps> */}
				{/* Props without Children */}
				{/* <CompsWithProps name='mike' address='123 street'/> */}
				{/* <AnotherWayComp name='mike' address='123 street'>test children</AnotherWayComp> */}
				<PersonForm addPerson={addPerson} />
				<PersonList peopleList={list} removePerson={removePerson} />
			</div>
		</>
	)
}

export default App
