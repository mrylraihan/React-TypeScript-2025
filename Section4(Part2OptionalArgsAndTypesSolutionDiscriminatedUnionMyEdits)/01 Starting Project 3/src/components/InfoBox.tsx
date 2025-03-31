import React, { type ReactNode } from 'react'
// Discriminated Union
type HintBoxProps = {
	mode: 'hint'
	children: ReactNode
}
type WarningBoxProps = {
	mode: 'warning',
	severity: 'low'|'medium'|'high'
	children: ReactNode
}
type InfoBoxProps = HintBoxProps |	WarningBoxProps
function InfoBox(props : InfoBoxProps) {
		console.log(props)
	const {mode, children} = props
	if (mode === 'hint') {
		return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		)
	}
	// you can only destructure it here not above because the if return doesn't expect a severity prop
	const {severity} = props 
	return (
		<aside className={`infobox infobox-warning warning--${severity}`}>
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	)
}

export default InfoBox
