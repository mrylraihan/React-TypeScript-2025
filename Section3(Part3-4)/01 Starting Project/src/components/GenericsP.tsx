import React,{type PropsWithChildren} from 'react'

type Data<T,U> = {
    name:T,
    number:U
}

function GenericsP(props:PropsWithChildren<Data<string,number>>) {
    console.log(props)
  return (
		<div>
			<h1>GenericsP</h1>
            <p>{props.name}</p>
            <p>{props.number}</p>
            <p>{props.children}</p>
            
		</div>
	)
}

export default GenericsP