import React, { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputProps = {
	label: string
	id: string
	printInput:()=>void
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({id, label,printInput, ...props}, ref) {
   
	
	return (
		<p>
			<label htmlFor={id}>Type: {label}</label>
			<input id={id} {...props} ref={ref} />
			<button onClick={printInput}>
				submit
			</button>
		</p>
	)
})

export default Input
