import React, { ComponentPropsWithoutRef } from 'react'
type ButtonProps = ComponentPropsWithoutRef<'button'> & {href?:never}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {href?:string}

function isAnchorProps(props:ButtonProps|AnchorProps): props is AnchorProps{
    return 'href' in props
}

function Button(props:ButtonProps | AnchorProps) {
    console.log(props)
    if(isAnchorProps(props)){
        console.log(props,'in anchor side')
        
        return <a className='button' {...props}>{props.children}</a>
    }

  return <button className='button' {...props}>{props.children}</button>
}

export default Button
