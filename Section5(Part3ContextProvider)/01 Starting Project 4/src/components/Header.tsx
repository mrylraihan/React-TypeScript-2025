import Button from './UI/Button.tsx';
import { TimersContext } from '../store/timers-context.tsx';
import { useContext } from 'react';

export default function Header() {
  const ctx = useContext(TimersContext)
  console.log(ctx)
  return (
		<header>
			<h1>ReactTimer</h1>

			<Button>{ctx?.isRunning ? "Stop" : "Start"} Timers</Button>
		</header>
	)
}
