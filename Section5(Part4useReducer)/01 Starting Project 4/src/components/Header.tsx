import { useContext } from 'react';
import Button from './UI/Button.tsx';
import { TimersContext, useTimerContext } from '../store/timers-context.tsx';

export default function Header() {
  // const ctx = useContext(TimersContext)!
  const ctx = useTimerContext()//using the custom hook 
  console.log(ctx)
  return (
    <header>
      <h1>ReactTimer</h1>
      <Button onClick={ctx?.isRunning?ctx.stopTimers:ctx?.startTimers}>{ctx?.isRunning? "Stop Timer":"Start Timer"}</Button>
    </header>
  );
}
