import React, { FormEvent, useRef } from 'react'

function TestForm() {
    const nameRef = useRef<HTMLInputElement>(null)
    const onSubmitHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(nameRef.current)
        console.log(e.target)
        
        
    }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
            <label>Name:
                <input type="text" name='name' id='name' ref={nameRef}/>
            </label>
        </div>
        <button type='submit'>Submit</button>
      </form> 
    </div>
  )
}

export default TestForm
