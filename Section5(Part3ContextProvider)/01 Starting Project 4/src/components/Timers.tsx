import { useContext } from 'react';
import { TimersContext } from '../store/timers-context';
// import {  useTimersContext } from '../store/timers-context';
export default function Timers() {
  const ctx = useContext(TimersContext)
  console.log(ctx)
  return <ul>{/* TODO ... */}</ul>;
}
