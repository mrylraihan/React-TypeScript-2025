import React, { ComponentPropsWithoutRef } from 'react'

type FormProps = ComponentPropsWithoutRef<'form'>

const FormTest: React.FC<FormProps> = ({children, ...props}) => {
	console.log(props)
	return (
		
			<form {...props}>
				{children}
			</form>
	)
}

export default FormTest
