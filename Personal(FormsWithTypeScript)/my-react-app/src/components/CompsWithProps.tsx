import React, { PropsWithChildren } from 'react'

type PropsData = PropsWithChildren<{name:String, address:string}>

function CompsWithProps(props : PropsData) {
    console.log(props)
  return (
    <div>
        <h1>CompsWithProps</h1>
        <h1>Name:{props.name}</h1>
        <h1>address:{props.address}</h1>
        {props?.children && <h1>address:{props.address}</h1>}
    </div>
  )
}

export default CompsWithProps