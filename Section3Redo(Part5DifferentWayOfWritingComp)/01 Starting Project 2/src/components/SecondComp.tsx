import React, {type FC, type PropsWithChildren} from 'react'

type ComponentData = PropsWithChildren<PropsData>

type PropsData ={
    title?: string,
}

const SecondComp:FC<ComponentData>=({title})=> {
    console.log(title)
  return (
		<div>
			{title ? <h1>{title}</h1> : <h1>No Title Here!</h1>}
		</div>
	)
}

export default SecondComp
