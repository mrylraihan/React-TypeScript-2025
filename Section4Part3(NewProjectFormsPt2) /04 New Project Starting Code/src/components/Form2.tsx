import React, { ComponentPropsWithoutRef, FormEvent, FormEventHandler } from 'react'
type FormDataProps = ComponentPropsWithoutRef<'form'> & {onSave:(value:unknown)=>void}
function Form2({children,onSave,  ...props}:FormDataProps) {
    const onSubmitHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSave(data);
    }
  return (
		<form {...props} onSubmit={onSubmitHandler}>
			{children}
		</form>
	)
}

export default Form2
