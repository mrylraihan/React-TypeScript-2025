import React, { ChangeEvent, FormEvent, useReducer } from 'react'
type IntialStateType = {
	firstName: string
	lastName: string
	fullName: string
}

const intialState: IntialStateType = {
	firstName: '',
	lastName: '',
	fullName: '',
}
type FullNameType = {
	type:"full"
}
type NameType = {
	type:"first"|"last",
	payload:string
}
type NameActionType = FullNameType | NameType

const reducer = (state: IntialStateType, action:NameActionType ) => {
	if (action.type === 'first') {
		return { ...state, firstName: action.payload }
	} else if (action.type === 'last') {
		return { ...state, lastName: action.payload }
	} else if (action.type === 'full') {
		return { fullName: `${state.firstName} ${state.lastName}`, firstName:'', lastName:'' }
	} else {
		return state
	}
}

function GetNameUseReducer() {
    const [state, dispatch] = useReducer(reducer, intialState)

	const firstNameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'first', payload: e.target.value })
	}
	const lastNameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'last', payload: e.target.value })
	}

	console.log(state)
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type:'full'})
        // e.currentTarget.reset()
    }

  return (
		<div>
			{state.fullName && <h1>{state.fullName}</h1>}
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						First Name:
						<input type='text' onChange={firstNameOnChangeHandler} value={state.firstName} />
					</label>
				</div>
				<div>
					<label>
						Second Name:
						<input type='text' onChange={lastNameOnChangeHandler} value={state.lastName}/>
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default GetNameUseReducer
