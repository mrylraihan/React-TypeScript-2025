import { createPortal } from 'react-dom';



type CartProps = {
	isShowNonCart: () => void
}

export default function NotCart({ isShowNonCart }: CartProps) {
	return createPortal(
		<>
			<div className='cart-backdrop' />
			<dialog id='cart-modal' open>
				<h2>Not Your Cart</h2>

				<button onClick={isShowNonCart}>Close</button>
			</dialog>
		</>,
		document.getElementById('modal2')!
	)
}
