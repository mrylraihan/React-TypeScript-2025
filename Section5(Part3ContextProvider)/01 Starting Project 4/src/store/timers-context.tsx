import { createContext, Children, ReactNode, useContext } from 'react'

type Timer = {
	name: string
	duration: string
}
type TimerState = {
	isRunning: boolean
	timers: Timer[]
}

export type TimerContextValue = TimerState & {
	addTimer: (timerData: Timer) => void
	startTimers: () => void
	stopTimers: () => void
}

export const TimersContext = createContext<TimerContextValue | null>(null)
// export const useTimersContext = ()=>{
// 	return useContext(TimersContext)!
// }
type TimersContextProviderProps = {
	children: ReactNode
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const ctx: TimerContextValue = {
        timers:[],
        isRunning: false,
        addTimer: (timerData: Timer) => {},
        startTimers:()=>{},
        stopTimers:()=>{}
    }
	return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
