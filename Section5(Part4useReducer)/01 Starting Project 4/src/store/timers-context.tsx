import { createContext, useContext, ReactNode, useReducer } from 'react'

type Timer = {
	name: string
	duration: number
}

type TimersState = {
	isRunning: boolean
	timers: Timer[]
}

const initialState: TimersState = {
	isRunning: false,
	timers: [],
}

type TimersContextValue = TimersState & {
	addTimer: (timerData: Timer) => void
	startTimers: () => void
	stopTimers: () => void
}
export const TimersContext = createContext<TimersContextValue | null>(null)

export const useTimerContext = () => {
	return useContext(TimersContext)
}

type TimerContextProviderProps = {
	children: ReactNode
}

// type Action = {
// 	type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS'
// 	payload?: Timer//this will produce an error now because our reducer isnt sure if its gonna be getting data 
// }
type StartTimersAction = {
    type: 'START_TIMERS'
}
type StopTimersAction = {
    type: 'STOP_TIMERS'
}
type AddTimerAction = {
    type: 'ADD_TIMER'
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'ADD_TIMER') {
			return { ...state, timers: [...state.timers, {name:action.payload.name, duration: action.payload.duration}] }
		}else if (action.type === 'START_TIMERS'){
            return { ...state, isRunning: true }
        } else if (action.type === 'STOP_TIMERS'){
            return { ...state, isRunning: true }
        } return state
}

export default function TimersContextProvider({
	children,
}: TimerContextProviderProps) {
	const [timersState, dispatch] = useReducer(timersReducer, initialState)
	const ctx: TimersContextValue = {
		isRunning: timersState.isRunning,
		timers: timersState.timers,
		addTimer: (timerData: Timer) => {
			dispatch({ type: 'ADD_TIMER', payload: timerData })
		},
		startTimers: () => {
			dispatch({ type: 'START_TIMERS' })
		},
		stopTimers: () => {
			dispatch({ type: 'STOP_TIMERS' })
		},
	}
	return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
