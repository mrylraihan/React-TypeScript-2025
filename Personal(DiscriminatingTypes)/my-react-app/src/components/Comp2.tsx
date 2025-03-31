type Dev = {
    type:"Dev",
    name:string,
    languages:string[]
}
type PM ={
    type:"PM",
    name:string,
    projects:string[]
}

type TeamAlu = Dev|PM


function Comp2(props:TeamAlu) {
    const {type, name} = props
 if(type === 'Dev'){
    const {languages} = props
  return (
		<div>
			<h1>Hello my name is {name} Dev</h1>
            <p>and i know :</p>
            <ul>
                {languages.map(lang=><li>{lang}</li>)}
            </ul>
		</div>
	)

    }
    const {projects} = props
  return (
		<div>
			<h1>Hello my name is {name} PM</h1>
			<p>and Iv worked on :</p>
			<ul>
				{projects.map((proj) => (
					<li>{proj}</li>
				))}
			</ul>
		</div>
	)
}

export default Comp2
