import React, { type FC, type ReactNode } from 'react'

type CompData = {
    name: string,
    children?: ReactNode
}
const ThirdComp:FC<CompData>=(props)=> {
    console.log(props)
	return <div>
        <h1>test</h1>
    </div>
}

export default ThirdComp
