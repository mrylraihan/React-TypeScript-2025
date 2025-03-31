import React from 'react'

function TestComp4(props:{number:number,children?:any}) {
    console.log(props)
  return (
    <div>
      <h1>Test Comp: {props.number}</h1>
    </div>
  )
}

export default TestComp4
