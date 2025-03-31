import { useContext } from "react";
import TimerContext from "../store/timers-context";

export default function Timers() {
  const ctx = useContext(TimerContext )
  console.log(ctx)
  return <ul>{/* TODO ... */}</ul>;
}
