import React, { useState } from 'react'

type NameData = {
    firstName :string;
    lastName :string;
    fullName:string;        
}
function Form2() {
    const [name, setName] = useState<NameData>({
        firstName: '',
        lastName: '',
        fullName:''
    })
    const firstNameHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("firstName:",e.target.value)
        setName(prev=>{
            return {...prev, firstName:e.target.value}
        })
    }
    const lastNameHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("lastName:",e.target.value)
         setName((prev) => {
						return { ...prev, lastName: e.target.value }
					})
    }
    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setName((prev) => ({ ...prev, fullName: `${name.firstName} ${name.lastName}`, firstName:'', lastName:''}))
    }
    console.log(name)
  return (
		<div>
			<h1>Form 2</h1>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						First Name:
						<input
							type='text'
							value={name.firstName}
							onChange={firstNameHandler}
						/>
					</label>
				</div>
				<div>
					<label>
						Last Name:
						<input
							type='text'
							value={name.lastName}
							onChange={lastNameHandler}
						/>
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form2
