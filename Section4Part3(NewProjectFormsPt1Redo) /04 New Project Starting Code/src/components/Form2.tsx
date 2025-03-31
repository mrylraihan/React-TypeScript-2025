import React, { ComponentPropsWithoutRef } from 'react'
type FormTypeData = ComponentPropsWithoutRef<'form'>

function Form2( {children, ...props}: FormTypeData) {
  console.log(props)
  return (
    <form {...props}>
      {children}
    </form>
  )
}

export default Form2
