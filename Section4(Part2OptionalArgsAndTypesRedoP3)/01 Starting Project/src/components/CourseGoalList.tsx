import CourseGoal from './CourseGoal.tsx'
import { type CourseGoal as CGoal } from '../App.tsx'
import InfoBox from './InfoBox.tsx'
import { ReactNode } from 'react'

type CourseGoalListProps = {
	goals: CGoal[]
	onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({goals,onDeleteGoal, }: CourseGoalListProps) {
	let warningBox: ReactNode //is the same as below
	// let warningBox:ReactNode = ''
	
	if (goals.length === 0) {
		warningBox = <InfoBox mode='hint'>No Goals Yet</InfoBox>
	} else if (goals.length >= 4) {
		warningBox = (
			<InfoBox mode='warning' severity='low'>
				You have a lot of goals!
			</InfoBox>
		)
	}
	return (
		<>
			{warningBox}
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	)
}
