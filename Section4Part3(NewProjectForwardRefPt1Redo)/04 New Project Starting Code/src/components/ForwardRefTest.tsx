import React, { ChangeEvent, forwardRef } from 'react'

const ForwardRefTest = forwardRef<
	HTMLInputElement,
	{
		testString: string
		onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
		printRef: () => void
	}
>((props, ref) => {
	console.log(props)
	console.log(ref)
	return (
		<>
			<div>
				<input type='text' ref={ref} />
				<button onClick={props.printRef}>click me</button>
			</div>
			<div>
				<input
					type='text'
					onChange={props.onChangeHandler}
					value={props.testString}
				/>
				<button onClick={props.printRef}>click me</button>
			</div>
		</>
	)
})

export default ForwardRefTest
