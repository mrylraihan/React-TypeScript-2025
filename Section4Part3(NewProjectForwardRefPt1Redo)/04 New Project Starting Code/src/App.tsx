import RefPractice from './components/RefPractice'
import Input from './components/Input'
import { ChangeEvent, useRef, useState } from 'react'
import FormRef from './components/FormRef'
import ForwardRefTest from './components/ForwardRefTest'
import ForwardRefTest2 from './components/ForwardRefTest2'
function App() {
	const inputRef = useRef<HTMLInputElement>(null)
	const testRef = useRef<HTMLInputElement>(null)
	const [stringState, setStringState] = useState<string>('')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setStringState(e.target.value)
	}

	return (
		<>
		<h2>{stringState}</h2>
			<main>
				<Input label='Test' id='test' ref={inputRef} />
			</main>
			<main>
				<ForwardRefTest
					testString={stringState}
					onChangeHandler={onChangeHandler}
					ref={testRef}
					printRef={() => console.log(testRef.current!.value)}
				/>
			</main>
			<main>
				<ForwardRefTest2
					testString={stringState}
					onChangeHandler={onChangeHandler}
					ref={testRef}
					printRef={() => console.log(testRef.current!.value)}
				/>
			</main>
		</>
	)
}

export default App
