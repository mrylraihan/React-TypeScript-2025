import React from 'react'
import TestComp from './components/TestComp'
import TestComp2 from './components/TestComp2'
import TestComp3 from './components/TestComp3'
import TestComp4 from './components/TestComp4'

function App() {
  return (
    <>
    <div>
      <h1>App</h1>
    </div>
    
    <TestComp number={1}/>
    <TestComp2 number={2}/>
    <TestComp3 number={3}/>
    <TestComp3 number={'?'}/>
    <TestComp3 number={'?'}>Test Comp 3</TestComp3>
    <TestComp4 number={4}/>
    <TestComp4 number={4}>Test Comp 4</TestComp4>

    </>
  )
}

export default App