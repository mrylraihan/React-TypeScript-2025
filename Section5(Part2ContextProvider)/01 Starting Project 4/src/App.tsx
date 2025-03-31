import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import TimerContext from './store/timers-context.tsx';

function App() {
  return (
    <>
    <TimerContext.Provider value={{isRunning:false, timers:[{name:"test", duration:0}], addTimer:()=>{}, startTimers:()=>{}, stopTimers:()=>{}}}>
      
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerContext.Provider>
    </>
  );
}

export default App;
