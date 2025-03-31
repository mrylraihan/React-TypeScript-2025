
import RefPractice from './components/RefPractice'
import Input from './components/Input';
import { useRef } from 'react';
import FormRef from './components/FormRef';
function App() {
	const inputRef = useRef<HTMLInputElement>(null)
	const printInput = ()=>{
		console.log(inputRef.current!.value)
	}
	return (
		<>
			<main>
				<Input label='Test' id='test' ref={inputRef} printInput={printInput} />
			</main>
			<main>
				<RefPractice />
			</main>
			<main>
				<FormRef/>
			</main>
		</>
	)
}

export default App
