import React, { ComponentPropsWithoutRef, FormEvent } from 'react'

type FormPropData = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void
}

function Form({ children, onSave, ...otherProps }: FormPropData) {
	const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = new FormData(e.currentTarget)
		console.log(data)
		const transformedData = Object.fromEntries(data)
		console.log(transformedData)
		onSave(transformedData)
		e.currentTarget?.reset()
	}
	return (
		<form onSubmit={onsubmitHandler} {...otherProps}>
			{children}
		</form>
	)
}

export default Form
