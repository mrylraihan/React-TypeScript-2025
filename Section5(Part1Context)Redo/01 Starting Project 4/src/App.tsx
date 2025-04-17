import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import { useTimerContext } from './store/timers-context.tsx';

function App() {
  const ctx = useTimerContext()
  console.log(ctx)
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </>
  );
}

export default App;
