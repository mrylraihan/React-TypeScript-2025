import { useTimerContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const ctx = useTimerContext()
  console.log(ctx?.timers)
  return (
	<div>
			<h1>list of timers</h1>
		<ul>
			{ctx?.timers.map(timer=><Timer {...timer}/>)}
		</ul>
	</div>
	)
}
