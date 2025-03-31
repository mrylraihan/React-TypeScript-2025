import React, { PropsWithChildren } from 'react'

type CompData = {
    name: string
    age: number
}

type PropsData = PropsWithChildren<CompData>


function FourthComp(props:PropsData) {
    console.log(props, "Props Data from Comp4")
  return (
    <div>
      <h1>Test FourthComp</h1>
    </div>
  )
}

export default FourthComp
