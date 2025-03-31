import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode, useEffect, useState } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

type SeverityType = 'low' | 'medium' | 'high'

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
const [severity, setSeverity] = useState<SeverityType>('low')
useEffect(() => {
 if(goals.length===5){
    setSeverity('medium')

  }else if(goals.length>=6){
    setSeverity('high')
  }
}, [goals])

  if(goals.length === 0){
    return <InfoBox mode='hint'>You have no Course Goals Yet, Start adding some</InfoBox>
  }
  let warningBox: ReactNode =
		goals.length >= 3 ? (
			<InfoBox mode='Warning' severity={severity}>
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
