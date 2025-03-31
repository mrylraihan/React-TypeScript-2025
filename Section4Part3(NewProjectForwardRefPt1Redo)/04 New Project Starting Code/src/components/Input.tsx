import React, { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputProps = {
	label: string
	id: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ id, label, ...props },
	ref
) {
	 const printInput = () => {
			if (ref && typeof ref === 'object' && ref.current) {
				console.log(ref.current.value)
			} else {
				console.error('Ref is not attached to an input element.')
			}
		}
	return (
		<p>
			<label htmlFor={id}>Type: {label}</label>
			<input id={id} {...props} ref={ref} />
			<button onClick={printInput}>submit</button>
		</p>
	)
})

export default Input
