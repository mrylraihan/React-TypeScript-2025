import React, { ComponentPropsWithoutRef } from 'react'

type ButtonProps = {
	el: 'button'
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
	el: 'anchor'
} & ComponentPropsWithoutRef<'a'>

function Button2(props: ButtonProps | AnchorProps) {
	const { el } = props
	console.log(el)
    console.log(props)
	if (el == 'button') {
		return <button className='button' {...props}>{props.children}</button>
	}
	return <a className='button'{...props}>{props.children}</a>
}

export default Button2
