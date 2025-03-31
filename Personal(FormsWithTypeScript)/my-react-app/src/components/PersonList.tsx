import React from 'react'
import { Person } from '../App'

function PersonList({
	peopleList,
	removePerson,
}: {
	peopleList: Person[]
	removePerson: (id: number) => void
}) {
	return (
		<div>
			<h1>Person List</h1>
			<ul>
				{peopleList.map((ele: Person) => {
					return (
						<li key={ele.id}>
							<p>{ele.name} </p>
							<button onClick={() => removePerson(ele.id)}>Delete</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default PersonList
