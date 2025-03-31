import React from 'react'

type InputProps = {
	type:string,
	label:string,
	id:string,
	

}

function Input({id, label, ...props}:InputProps) {
    // console.log(id)
    // console.log(label)
    // console.log(props)
	const objTest = {name:"name", body:"body", details:"details"}
	console.log(objTest)
	const {name , ...objTestRemainder} = objTest
	console.log(objTestRemainder)

	return (
		<p>
			<label htmlFor={id}>Type: {label}</label>
			<input id={id} {...props}/>
		</p>
	)
}

export default Input
