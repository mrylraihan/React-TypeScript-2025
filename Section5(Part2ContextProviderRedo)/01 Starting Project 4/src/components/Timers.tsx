import {  useTimersContext } from '../store/timers-context';
export default function Timers() {
  const ctx = useTimersContext()
  console.log(ctx)
  return <ul>{/* TODO ... */}</ul>;
}
