import React, { ComponentPropsWithoutRef } from 'react'

type FormProps = ComponentPropsWithoutRef<'form'>
function Form({children, ...props}:FormProps) {

  return (
    <form {...props}>
      {children}
    </form>
  )
}

export default Form
