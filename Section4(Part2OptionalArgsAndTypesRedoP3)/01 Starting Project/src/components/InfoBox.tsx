import React , {type ReactNode} from 'react'

type HintBoxProps = {
	mode: 'hint'
	children: ReactNode
}

type WarningBoxProps = {
	mode: 'warning'
	severity: 'low' | 'medium' | 'high'
	children: ReactNode
}
type InfoBoxProps = HintBoxProps | WarningBoxProps

function InfoBox(props:InfoBoxProps) {
  console.log(props)
  const {children, mode} = props
 if(mode==='hint'){
   return (
     <aside className='infobox infobox-hint'>
					<p>{children}</p>
				</aside>
			)
    }
    
    const {severity} = props
   return (
			<aside className={`infobox infobox-warning warning--${severity}`}>
				<p>{children}</p>
			</aside>
		)
}

export default InfoBox
// import React , {type ReactNode} from 'react'

// type HintBoxProps = {
// 	mode: 'hint'
// 	children: ReactNode
// }

// type WarningBoxProps = {
// 	mode: 'warning'
// 	severity: 'low' | 'medium' | 'high'
// 	children: ReactNode
// }
// type InfoBoxProps = HintBoxProps | WarningBoxProps

// function InfoBox(props:InfoBoxProps) {
//   console.log(props)
//   const {children, mode} = props
//  if(mode==='warning'){
//    const {severity} = props
//     return (
//         <aside className={`infobox infobox-warning warning--${severity}`}>
//       <p>{children}</p>
//     </aside>
// 		)
//  }
//   return (
// 		<aside className='infobox infobox-hint'>
// 			<p>{children}</p>
// 		</aside>
// 	)
// }

// export default InfoBox
