import {createContext} from 'react'
type Timer = {
    name:string,
    duration:number
}
type TimersState = {
    isRunning:boolean;
    timers:Timer[]
}

type TimerContextValue = TimersState 
& {
    addTimer:(timerData:Timer)=>void, 
    startTimers:()=>void, 
    stopTimers:()=>void
}
const TimerContext = createContext<TimerContextValue | null>(null)
export default TimerContext