import React, { type PropsWithChildren, type ReactNode } from 'react'

type CourseGoalProps = PropsWithChildren<{title:string}>

function CourseGoalChildren3({title, children}: CourseGoalProps) {
  console.log(title)
  console.log(children)
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default CourseGoalChildren3