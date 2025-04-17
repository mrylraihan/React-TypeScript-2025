import { createContext, Children, ReactNode } from 'react'

type Timer = {
	name: string
	duration: string
}
type TimerState = {
	isRunning: boolean
	timers: Timer[]
}

type TimerContextValue = TimerState & {
	addTimers: (timerData: Timer) => void
	startTimers: () => void
	stopTimers: () => void
}

export const TimersContext = createContext<TimerContextValue | null>(null)

type TimersContextProviderProps = {
	children: ReactNode
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const ctx: TimerContextValue = {
        timers:[],
        isRunning: false,
        addTimers: (timerData: Timer) => {},
        startTimers:()=>{},
        stopTimers:()=>{}
    }
	return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
