import { createContext, useContext, Children, ReactNode } from 'react';

type Timer = {
    name:string,
    duration:number
};

type TimersState = {
    isRunning: boolean,
    timers: Timer[]
};

type TimersContextValue = TimersState & {
    addTimer:(timerData:Timer)=>void,
    startTimers:()=>void,
    stopTimers:()=>void,
}
export const TimersContext = createContext<TimersContextValue| null>(null)

export const useTimerContext = ()=>{
    return useContext(TimersContext)
}

type TimerContextProviderProps = {
    children:ReactNode
}

export default function TimersContextProvider({ children }: TimerContextProviderProps){
    const ctx: TimersContextValue = {
        isRunning: false,
        timers: [],
        addTimer: (timerData: Timer) => {},
        startTimers: () => {},
        stopTimers: () => {},
    }
	return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
