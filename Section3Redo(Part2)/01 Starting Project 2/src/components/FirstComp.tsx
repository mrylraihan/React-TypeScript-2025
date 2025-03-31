import React, { useState } from 'react'
type nameDefault = {
    firstName: string,
    lastName: string
}
const defaultState: nameDefault = { firstName: '', lastName: '' }

function FirstComp(props:{children?:any}) {
    const [name, setName] = useState<nameDefault>(defaultState)

    const firstNameHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName({...name, firstName:e.target.value})
    }
    const lastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName({...name, lastName:e.target.value})
    }
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			console.log(name)
		}
  return (
		<div>
            <h3>{name.firstName} {name.lastName}</h3>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						FirstName:
						<input type='text' placeholder='First Name?' value={name.firstName} onChange={firstNameHandler}/>
					</label>
				</div>
				<div>
					<label>
						LastName:
						<input type='text' placeholder='Last Name?' value={name.lastName} onChange={lastNameHandler} />
					</label>
				</div>
                <button type='submit'>submit</button>
			</form>
		</div>
	)
}

export default FirstComp
