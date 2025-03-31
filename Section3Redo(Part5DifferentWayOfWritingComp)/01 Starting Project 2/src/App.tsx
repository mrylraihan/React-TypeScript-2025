import CourseGoal from "./components/CourseGoal";
import FirstComp from './components/FirstComp';
import FourthComp from "./components/FourthComp";
import SecondComp from './components/SecondComp';
import ThirdComp from "./components/ThirdComp";

export default function App() {
  const printHello = () => console.log('hello')
  return (
		<>
			<main>
				<h1>Let's get started!</h1>
				<CourseGoal
					title={'Study ReactTS'}
					description={'Working on Programming in ReactTS'}
				/>
			</main>
			<main>
				<CourseGoal
					title={'Study ReactTS'}
					description={'Working on Programming in ReactTS'}>
					Test
				</CourseGoal>
			</main>
			<main>
				<FirstComp />
			</main>
			<main>
				<SecondComp title='Wallie' />
			</main>
			<main>
				<SecondComp />
			</main>
			<main>
				<ThirdComp name='Wallie'/>
			</main>
			<main>
				<FourthComp name='Wallie' age={30}/>
			</main>
			<main>
				<FourthComp name='Wallie' age={30}>Test Data</FourthComp>
			</main>
		</>
	)
}
