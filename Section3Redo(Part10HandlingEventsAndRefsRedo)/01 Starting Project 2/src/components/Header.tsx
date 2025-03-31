import React, {type FC, type PropsWithChildren } from 'react'

type PropsData = {
    image:{
        src:string,
        alt:string,
    }
}
type HeaderProps = PropsWithChildren<PropsData>

const Header:FC<HeaderProps> = ({image, children}) => {
    console.log({image, children})
  return (
		<header>
			<img src={image.src} alt={image.alt} />
            {children}
		</header>
	)
}

export default Header
