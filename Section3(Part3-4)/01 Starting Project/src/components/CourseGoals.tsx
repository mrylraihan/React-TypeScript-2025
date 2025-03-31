import React from 'react'

const CourseGoals:React.FC<{num:number, setNum:(num:number)=>void}>=({num, setNum})=> {
    console.log({num, setNum})
  return (
    <article>
        <div>
            <h2>TITLE :{num}</h2>
            <p>DESCRIPTION</p>
        </div>
        <button onClick={()=>setNum(num+1)}>Delete</button>
    </article>
  )
}

export default CourseGoals
