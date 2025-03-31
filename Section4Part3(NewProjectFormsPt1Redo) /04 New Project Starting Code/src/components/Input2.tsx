import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
type labelData = {id:string, label:string}
type InputPropsData = ComponentPropsWithoutRef<'input'> & labelData

const Input2 = forwardRef<HTMLInputElement, InputPropsData>(function ({
	id,
	label,
	...props
},ref) {
	return (
		<div>
			<label htmlFor={id}>
				{label}
				<input type='text' id={id} {...props} ref={ref}/>
			</label>
		</div>
	)
})

export default Input2
