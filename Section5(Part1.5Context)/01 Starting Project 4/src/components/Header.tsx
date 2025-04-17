import { useContext } from 'react';
import Button from './UI/Button.tsx';
import { TimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const ctx = useContext(TimersContext)
  console.log(ctx)
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>Stop Timers</Button>
    </header>
  );
}
