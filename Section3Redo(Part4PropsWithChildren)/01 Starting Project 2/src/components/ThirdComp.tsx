import React, { type ReactNode } from 'react'

type CompData = {
    name: string,
    children?: ReactNode
}
function ThirdComp(props: CompData) {
    console.log(props)
	return <div>
        <h1>test</h1>
    </div>
}

export default ThirdComp
