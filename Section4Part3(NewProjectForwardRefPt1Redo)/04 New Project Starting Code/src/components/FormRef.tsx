import React, { FormEvent, useRef, useState } from 'react'

function FormRef() {
    const [name, setName]= useState<string>('')
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)

    const onSubmitHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setName(`${firstNameRef.current!.value} ${lastNameRef.current!.value}`)
        firstNameRef.current!.value = ''
        lastNameRef.current!.value = ''
    }
  return (
		<div>
			{name && <h1>{name}</h1>}
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						First Name:
						<input type='text' ref={firstNameRef} />
					</label>
				</div>
				<div>
					<label>
						Last Name:
						<input type='text' ref={lastNameRef} />
					</label>
				</div>
				<button type='submit'>submit</button>
			</form>
		</div>
	)
}

export default FormRef
