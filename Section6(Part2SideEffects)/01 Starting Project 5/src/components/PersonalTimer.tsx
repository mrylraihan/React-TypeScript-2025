import React, { useEffect, useState } from 'react'
import Container from './UI/Container.tsx'
let number = 100
function PersonalTimer() {
    const [trigger, setTrigger] = useState(false)
    const [num, setNum] = useState(number)
    useEffect(() => {
        if(trigger && num != 0){
            setTimeout(() => {
                setNum((prev) => prev - 1)
			}, 1000)
        }
		}, [trigger, num])
    const setTimer = ()=> setTrigger(!trigger)
    console.log(trigger)
    console.log(num)
  return (
		<Container as='article'>
			<h1>Personal Timer</h1>
			<p>{num}</p>
			<progress max={"100"} value={num} />
			<button onClick={setTimer}>{trigger ? 'stop' : 'start'}</button>
		</Container>
	)
}

export default PersonalTimer
