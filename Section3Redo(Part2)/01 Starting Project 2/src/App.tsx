import CourseGoal from "./components/CourseGoal";
import FirstComp from './components/FirstComp';

export default function App() {
  return (
    <>
		<main>
			<h1>Let's get started!</h1>
      <CourseGoal title={'Study ReactTS'} description={'Working on Programming in ReactTS'}/>
		</main>
    <main>
      <FirstComp/>
    </main>
    </>
	)
}
