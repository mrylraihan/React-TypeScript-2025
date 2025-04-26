import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import { useTimerContext } from './store/timers-context.tsx';
import GetName from './components/GetName';
import GetNameUseReducer from './components/GetNameUseReducer.tsx';

function App() {
  const ctx = useTimerContext()
  console.log(ctx)
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
        {/* <GetName /> */}
        <GetNameUseReducer />
      </main>
    </>
  );
}

export default App;
