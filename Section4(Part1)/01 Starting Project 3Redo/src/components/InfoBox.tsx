import React , {type ReactNode} from 'react'

type InfoBoxProps = {
    mode:'hint'|'warning',
    children:ReactNode, 
}

function InfoBox({children,mode}:InfoBoxProps) {
 if(mode==='hint'){
    return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		)
 }
  return (
    <aside className='infobox infobox-warning warning--medium'>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
