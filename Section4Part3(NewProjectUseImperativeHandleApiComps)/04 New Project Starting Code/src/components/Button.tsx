import React, { ComponentPropsWithoutRef } from 'react'
type ButtonProps = ComponentPropsWithoutRef<'button'> & {href?:never}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {href?:string}

function isAnchorProps(props:ButtonProps|AnchorProps): props is AnchorProps{
    return 'href' in props
}

function Button(props:ButtonProps | AnchorProps) {
    if(isAnchorProps(props)){
        console.log(props,'in anchor side')
        
        return <a className='button' {...props}>{props.children?props.children:"anchor"}</a>
    }

  return <button className='button' {...props}>{props.children?props.children:'button'}</button>
}

export default Button
