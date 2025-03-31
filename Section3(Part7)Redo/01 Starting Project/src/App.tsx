import { useState } from "react";

import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import CourseGoals from "./components/CourseGoals";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prev) => {
      const newGoal = {
        id: prev.length+1,
        title: "new Goal",
        description: "Test New Goals",
      };
      return [...prev, newGoal];
    });
  };
  console.log(goals)
  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "A List of Goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <h1>Let's get started!</h1>
        <button onClick={handleAddGoal}>Add Goal</button>
		{/* <ul>
		{goals.map((goal)=><li key={goal.id}><CourseGoals title={goal.title} id={goal.id}>
			<p>{goal.description}</p>
			</CourseGoals></li>)}
		</ul> */}
		<CourseGoalList goals={goals}/>
      </main>
    </>
  );
}
