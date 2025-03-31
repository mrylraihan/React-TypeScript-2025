import CourseGoal from './CourseGoal.tsx'
import { type CourseGoal as CGoal } from '../App.tsx'
import InfoBox from './InfoBox.tsx'
import { ReactNode } from 'react'

type CourseGoalListProps = {
	goals: CGoal[]
	onDeleteGoal: (id: number) => void
}
type SeverityType = 'low'|'medium'|'high'
export default function CourseGoalList({goals, onDeleteGoal,}: CourseGoalListProps) {
  let warningBox:ReactNode; //is the same as below
  // let warningBox:ReactNode = '';
  let severity: SeverityType
  severity = goals.length < 4 ? 'low' : (goals.length > 6?'high':'medium')

	if (goals.length === 0) {
    warningBox = <InfoBox mode='hint'>No Goals Yet</InfoBox>
	}else if(goals.length>=3){
    warningBox = (
			<InfoBox mode='warning' severity={severity}>
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
