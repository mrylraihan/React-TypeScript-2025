import React from 'react'

function Form1() {
    console.log("Form1")
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log("Wayel Raihan")
        console.log(e.currentTarget)
        const formData = new FormData(e.currentTarget)
        console.log(formData)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        e.currentTarget.reset()
    }
  return (
		<div>
			<h1>Form 1</h1>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						First Name:
						<input type='text' id='firstName' name='firstName' />
					</label>
				</div>
				<div>
					<label>
						Last Name:
						<input type='text' id='lastName' name='lastName' />
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form1
