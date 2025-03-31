import React, { type ReactNode } from 'react'
type CourseGoalProps ={
    title:string,
    children: ReactNode
}
function CourseGoalChildren({title, children}: CourseGoalProps) {
  console.log(title)
  console.log(children)
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default CourseGoalChildren