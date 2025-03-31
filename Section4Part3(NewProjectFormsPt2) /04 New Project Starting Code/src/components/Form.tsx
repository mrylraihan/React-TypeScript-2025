import React, { ComponentPropsWithoutRef, FormEvent } from 'react'

type FormProps = ComponentPropsWithoutRef<'form'>& {onSave:(value: unknown)=>void}
function Form({ children,onSave, ...props }: FormProps) {
	
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(e.target)
		console.log(e.currentTarget)
		const formData = new FormData(e.currentTarget)
		console.log(formData)
		const data = Object.fromEntries(formData)
		console.log(data)
   onSave(data)
	}
	return (
		<form onSubmit={onSubmitHandler} {...props}>
			{children}
		</form>
	)
}

export default Form
