import React, { type PropsWithChildren, type ReactNode } from 'react'

type CourseGoalProps = PropsWithChildren<{title:string}>

const CourseGoalChildren4:React.FC<PropsWithChildren<{title:string}>>=({title, children})=> {
// const CourseGoalChildren4:React.FC<CourseGoalProps>=({title, children})=> {
  console.log(title)
  console.log(children)
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default CourseGoalChildren4