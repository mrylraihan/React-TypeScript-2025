import React, { ElementType } from 'react'

type ContainerProps = {
as :ElementType
} 

function Container({as}:ContainerProps) {
    console.log(as)
    const Component = as;
  
    return <Component/>
}

export default Container
