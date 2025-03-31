import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if(goals.length === 0){
    return <InfoBox mode='hint'>You have no Course Goals Yet, Start adding some</InfoBox>
  }
  let warningBox: ReactNode =
		goals.length >= 4 ? (
			<InfoBox mode='Warning' severity='high'>
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
