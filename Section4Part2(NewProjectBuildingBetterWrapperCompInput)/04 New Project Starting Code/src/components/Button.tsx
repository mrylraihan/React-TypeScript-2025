import React, { ComponentPropsWithoutRef } from 'react'
type ButtonProps = {
    el:"button";
}&ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    el:"anchor";
}&ComponentPropsWithoutRef<'a'>


function Button(props:ButtonProps | AnchorProps) {
    const {el} = props
    if(el ==='anchor'){
        console.log(props,'in anchor side')
        
        return <a {...props}>{props.children}</a>
    }

  return <button {...props}>{props.children}</button>
}

export default Button
