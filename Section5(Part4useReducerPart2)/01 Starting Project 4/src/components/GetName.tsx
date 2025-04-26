import React, { FormEvent, useRef, useState } from 'react'

function GetName() {
  const [fullName, setFullName] = useState<string>('')
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(firstNameRef.current!.value)
        console.log(lastNameRef.current!.value)
        setFullName(
          `${firstNameRef.current!.value} ${lastNameRef.current!.value}`
				)
        e.currentTarget.reset()
    }

  return (
		<div>
			{fullName && <h1>{fullName}</h1>}
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						First Name:
						<input type='text' ref={firstNameRef} />
					</label>
				</div>
				<div>
					<label>
						Second Name:
						<input type='text' ref={lastNameRef} />
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default GetName
