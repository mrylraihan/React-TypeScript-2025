import React, { useRef } from 'react'

function RefPractice() {
    const testRef = useRef<HTMLInputElement>(null)
    const printCurrent = ()=> console.log(testRef.current)
    const printValue = ()=> console.log(testRef.current!.value)
  return (
    <div>
        <input type="text" ref={testRef}/>
      <button onClick={printCurrent}>Check Ref</button>
      <button onClick={printValue}>Check Ref Value</button>
    </div>
  )
}

export default RefPractice
