import React, { ComponentPropsWithoutRef } from 'react'
type ButtonProps = {
    el:"button";
}&ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    el:"anchor";
}&ComponentPropsWithoutRef<'a'>


function Button(props:ButtonProps | AnchorProps) {
    const {el} = props
    console.log(props)
    console.log({...props})
    if(el ==='anchor'){
        console.log(props,'in anchor side')
        
        return <a className='button' {...props}>{props.children}</a>
    }

  return <button className='button' {...props}>{props.children}</button>
}

export default Button
