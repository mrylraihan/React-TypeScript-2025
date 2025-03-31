import React, {type PropsWithChildren} from 'react'

type ComponentData = PropsWithChildren<PropsData>

type PropsData ={
    title?: string,
}

function SecondComp({title}: ComponentData) {
    console.log(title)
  return (
		<div>
			{title ? <h1>{title}</h1> : <h1>No Title Here!</h1>}
		</div>
	)
}

export default SecondComp
