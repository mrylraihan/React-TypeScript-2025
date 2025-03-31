import React, { Component, ComponentPropsWithoutRef } from 'react'

type InputProps = {
	label:string,
	id:string,
} & ComponentPropsWithoutRef<'input'>

function Input({id, label, ...props}:InputProps) {
   
	console.log(props)
	return (
		<p>
			<label htmlFor={id}>Type: {label}</label>
			<input id={id} {...props}/>
		</p>
	)
}

export default Input
