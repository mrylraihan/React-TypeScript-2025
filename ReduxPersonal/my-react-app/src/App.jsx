import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { countActions } from './store'
import { useRef } from 'react'
import { nameActions } from './store/nameSlice'
function App() {
  const state = useSelector(state=>state)
  const counterSlice = state.counterSlice
  const nameSlice = state.nameSlice
  const dispatch = useDispatch()
  const numRef = useRef()
  console.log(state) 
  console.log(state.counterSlice) 
  console.log(state.nameSlice) 

  const addTotal = ()=>{
    const num = numRef.current.value
    console.log(+num)
    dispatch(countActions.countSum({num}))
  }
  
  const getFirstName = (e)=>{
	dispatch(nameActions.getFirstName({firstName:e.target.value}))
  }
  const getLastName = (e)=>{
	dispatch(nameActions.getLastName({lastName:e.target.value}))
  }

  return (
		<>
			<div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<p>{counterSlice.count}</p>
				<button onClick={() => dispatch(countActions.countUp())}>
					count Up is
				</button>
				<button onClick={() => dispatch(countActions.countDown())}>
					count Down is
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<div>
				<label>
					Add your number:
					<input type='number' ref={numRef} />
				</label>
				<button onClick={addTotal}>Add to Total</button>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<div>
				<h1>NameSlice</h1>
				<div>
					<div>
						<label>
							FirstName:
							<input
								type='text'
								value={nameSlice.firstName}
								onChange={getFirstName}
							/>
						</label>
					</div>
					<div>
						<label>
							lastName:
							<input
								type='text'
								value={nameSlice.lastName}
								onChange={getLastName}
							/>
						</label>
					</div>
					<button onClick={()=>{
						dispatch(nameActions.getFullName())
					}}>submit</button>
				</div>
			</div>
		</>
	)
}

export default App
