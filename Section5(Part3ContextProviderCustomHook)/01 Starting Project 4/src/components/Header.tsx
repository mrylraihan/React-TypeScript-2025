import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const ctx = useTimersContext()
  console.log(ctx)
  return (
		<header>
			<h1>ReactTimer</h1>

			<Button>{ctx.isRunning ? "Stop" : "Start"} Timers</Button>
		</header>
	)
}
