import React, { ComponentPropsWithoutRef } from 'react'

type FormProps = ComponentPropsWithoutRef<'form'>

const FormTest: React.FC<FormProps> = (props) => {
	console.log(props)
	return (
		<div>
			<h1>Form Test</h1>
			<form onSubmit={props.onSubmit}>
				<button type='submit'>click</button>
			</form>
		</div>
	)
}

export default FormTest
