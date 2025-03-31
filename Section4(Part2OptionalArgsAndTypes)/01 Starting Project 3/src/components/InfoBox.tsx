import React, { type ReactNode } from 'react'

type InfoBoxProps = {
	mode: 'hint' | 'Warning',
	severity?: 'low'|'medium'|'high'
	children: ReactNode
}
function InfoBox({ mode, severity, children }: InfoBoxProps) {
	console.log({mode, severity, children})
	if (mode === 'hint') {
		return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		)
	}
	return (
		<aside className={`infobox infobox-warning warning--${severity}`}>
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	)
}

export default InfoBox
