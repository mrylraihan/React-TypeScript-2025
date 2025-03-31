import React from 'react'

function TestComp(props:{number:number}) {
  return (
    <div>
      <h1>Test Comp: {props.number}</h1>
    </div>
  )
}

export default TestComp
