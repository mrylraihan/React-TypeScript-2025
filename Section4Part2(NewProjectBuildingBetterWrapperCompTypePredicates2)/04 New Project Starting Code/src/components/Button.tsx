import React, { ComponentPropsWithoutRef } from 'react'

type ButtonProps =ComponentPropsWithoutRef<'button'>

type AnchorProps = ComponentPropsWithoutRef<'a'>

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
	return 'href' in props
}
function Button(props:ButtonProps | AnchorProps){
  
    if (isAnchorProps(props)) {
			console.log(props, 'in anchor side')

			return (
				<a className='button' {...props}>
					{props.children}
				</a>
			)
		}

  return <button className='button' {...props}>{props.children}</button>
}

export default Button
