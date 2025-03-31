import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
type SeverityType = 'low'|'medium'|'high';

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {

 let severity : SeverityType ;

 severity = goals.length>6 ? 'high': goals.length>4?'medium':'low'

  if(goals.length === 0){
    return <InfoBox mode='hint'>You have no Course Goals Yet, Start adding some</InfoBox>
  }
  let warningBox: ReactNode =
		goals.length >= 3 ? (
			<InfoBox mode='warning' severity={severity}>
				Your collecting too many goals, dont put too much on your plate!
			</InfoBox>
		) : null
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
  );
}
