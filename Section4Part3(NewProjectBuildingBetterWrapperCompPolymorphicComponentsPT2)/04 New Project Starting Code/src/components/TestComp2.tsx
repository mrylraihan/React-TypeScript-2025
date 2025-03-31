import React, { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'
type ContainerProps<T extends ElementType> = PropsWithChildren<{is?:T}> & ComponentPropsWithoutRef<T>

function TestComp2<Y extends ElementType>({is, ...props}:ContainerProps<Y>) {
    console.log(props)
    const CompElement = is || 'div'
  return (
    <CompElement {...props}>
      {props.children}
    </CompElement>
  )
}

export default TestComp2
