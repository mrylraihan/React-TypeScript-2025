import { useState } from "react";
import CourseGoals from "./components/CourseGoals";
import CourseGoal from "./components/CourseGoal";

export default function App() {
  const [number, setNumber] = useState<number>(0);
  return<>
   <main>
  <h1>Let's get started!</h1>
  <CourseGoals num={number} setNum={setNumber}/>
  </main>;
  <main>
  <CourseGoal title={"Learn React + TS"} description={"Learn it from the ground up"}/>
  </main>
  </>
}
