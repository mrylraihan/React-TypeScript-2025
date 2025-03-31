import React, { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from 'react'

type FormPropData = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void
}
export type FormHandle = {
	clear:()=>void
}

const Form = forwardRef<FormHandle, FormPropData>(function (
	{ children, onSave, ...otherProps },
	ref
) {
	const form = useRef<HTMLFormElement>(null)

	useImperativeHandle(ref, () => {
		return {
			clear() {
				console.log('Clearing')
				form.current?.reset()
			},
		}
	})

	const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = new FormData(e.currentTarget)
		console.log(data)
		const transformedData = Object.fromEntries(data)
		console.log(transformedData)
		onSave(transformedData)
		form.current?.reset()
		// e.currentTarget?.reset()
	}
	return (
		<form onSubmit={onsubmitHandler} {...otherProps} ref={form}>
			{children}
		</form>
	)
})

export default Form
