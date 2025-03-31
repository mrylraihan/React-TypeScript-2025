import React from 'react'

interface propsData {title:string, description:string}
// type propsData = {title:string, description:string}

function CourseGoal({title, description}:propsData) {
// function CourseGoal(props:{title:string, description:string}) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  )
}

export default CourseGoal
