import React, { type FC, type PropsWithChildren } from 'react'

type ImageData<T> = {
	src: T
	alt: T
}
type GoalsImage = {
	image: ImageData<string>
}

const Header: FC<PropsWithChildren<GoalsImage>> = ({image, children}) => {
	console.log({image, children})
	return (
		<header>
			<h1>Header</h1>
			{children}
			<img {...image} />
			{/* <img src={image.src} alt={image.alt} /> because the properties are both alt and src we can use the spread operator on this feild and it would work the same */}
		</header>
	)
}

export default Header
