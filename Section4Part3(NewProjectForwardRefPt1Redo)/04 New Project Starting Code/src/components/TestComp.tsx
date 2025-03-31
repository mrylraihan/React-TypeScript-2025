import React, { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode } from 'react'

type ContainerProps<T extends ElementType> = PropsWithChildren<{as?:T}> & ComponentPropsWithoutRef<T>

function TestComp<C extends ElementType>({as,...props}: ContainerProps<C>) {
  console.log({as,...props})
  const CompAs = as || 'div'

	return <CompAs {...props}>{props.children}</CompAs>
}

export default TestComp
