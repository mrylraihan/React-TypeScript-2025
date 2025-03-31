import React, {useRef, type FormEvent} from 'react'

type NewGoalProps= (titleData:string, summaryData:string)=>void

function NewGoal(props:{addGoal:NewGoalProps}) {
	const goalRef = useRef<HTMLInputElement>(null)
	const summaryRef = useRef<HTMLInputElement>(null)
    
	const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log("Test")
        console.log(goalRef.current!.value)
        const goal = goalRef.current!.value
        console.log(summaryRef.current!.value)
        const summary = summaryRef.current!.value
		props.addGoal(goal, summary)
		event.currentTarget.reset()
    }
  return (
		<form onSubmit={(handleSubmit)}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input id='goal' type='text' name='goal' ref={goalRef}/>
			</p>
			<p>
				<label htmlFor='summary'>Short Summary</label>
				<input id='summary' type='text' name='summary' ref={summaryRef}/>
			</p>
			<p>
				<button type='submit'>Add Goal</button>
			</p>
		</form>
	)
}

export default NewGoal
