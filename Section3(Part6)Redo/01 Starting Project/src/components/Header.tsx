import React,{ Children, PropsWithChildren } from 'react'

type PropsInput ={
	image:{
		src:string,
		alt:string,
	}
}

type PropsData = PropsWithChildren<PropsInput>
const Header:React.FC<PropsData> =(props)=> {
	console.log(props)
  return (
	<div>
		<h1>Header</h1>
		<img src={props.image.src} alt={props.image.alt} />
		{/* <img {...props.image} /> */}
		{props.children}
	</div>
  )
}

export default Header