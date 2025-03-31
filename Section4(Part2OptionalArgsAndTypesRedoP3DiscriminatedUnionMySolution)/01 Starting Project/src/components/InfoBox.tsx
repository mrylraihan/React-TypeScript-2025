import React , {PropsWithChildren, type ReactNode} from 'react'


type WarningMode = {
	mode: 'warning'
	severity: 'low' | 'medium' | 'high'
}
type HintMode = {
  mode: 'hint'
}
type InfoBoxProps = PropsWithChildren<WarningMode|HintMode>

function InfoBox(props:InfoBoxProps) {
  const {mode, children} = props
  if(mode==='hint'){
    return (
      <aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		)
  }
  const { severity } = props
  console.log({mode, severity})
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
