import React, { type ChangeEvent, FormEvent, useRef, useState } from 'react'
import { NewGoalProps } from './NewGoal'

export type CourseGoalData = {
    title: string
    description: string
}


function NewGoal1({addGoal}: NewGoalProps) {
    
        const titleRef = useRef<HTMLInputElement>(null)
        const descriptionRef = useRef<HTMLInputElement>(null)
  

  
    // console.log(goalData)
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const title = titleRef.current!.value
        const description = descriptionRef.current!.value
        addGoal(title, description)
        console.log({title, description})
        e.currentTarget.reset()
    }
    return (
        <div>
            <h1>Make a Goal</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>
                        Title:
                        <input
                            type='text'
                            ref={titleRef}
                            placeholder='Enter a Title'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input
                            type='text'
                            ref={descriptionRef}
                            placeholder='Enter a Description'
                        />
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
            <form onSubmit={(e) => e}></form>
        </div>
    )
}

export default NewGoal1
