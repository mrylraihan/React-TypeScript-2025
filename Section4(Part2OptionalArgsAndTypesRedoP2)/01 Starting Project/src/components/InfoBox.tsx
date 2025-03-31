import React , {type ReactNode} from 'react'

type InfoBoxProps = {
    mode:'hint'|'warning',
    severity?:'low'|'medium'|'high'
    children:ReactNode, 
}

function InfoBox({children,mode, severity}:InfoBoxProps) {
  console.log({mode, severity})
 if(mode==='hint'){
    return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		)
 }
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
