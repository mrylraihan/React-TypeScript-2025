import React, { ElementType, ComponentPropsWithoutRef } from 'react'

type ContainerProps< T extends ElementType>= {
    as?:T
    style?:{color:string}
}&ComponentPropsWithoutRef<T>


function Container2<C extends ElementType>(props:ContainerProps<C>) {
    console.log(props)
    const Comp = props.as || 'div'
  return (
    <div>
        <Comp {...props}>{props.children}</Comp>
    </div>
  )
}

export default Container2
