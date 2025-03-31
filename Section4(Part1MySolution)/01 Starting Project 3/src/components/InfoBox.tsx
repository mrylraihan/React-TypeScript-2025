import React, { type ReactNode } from 'react'

type InfoBoxProps = {
	mode: 'hint' | 'Warning'
	children: ReactNode
}
function InfoBox({ mode, children }: InfoBoxProps) {
	return (
		<aside
			className={
				mode === 'Warning'
					? 'infobox infobox-warning warning--medium'
					: 'infobox infobox-hint'
			}>
			{mode === 'Warning' && <h2>Warning</h2>}
			<p>{children}</p>
		</aside>
	)
}

export default InfoBox
