import { useState } from 'react';

import Cart from './Cart.tsx';
import NotCart from './NotCart.tsx';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [showNonCart, setShowNonCart] =useState(false)

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }
  function isShowNonCart (){
    setShowNonCart(!showNonCart)
  }
  return (
		<>
			{cartIsVisible && <Cart onClose={handleCloseCartClick} />}
			{showNonCart && <NotCart isShowNonCart={isShowNonCart} />}
			<header id='main-header'>
				<div id='main-title'>
					<img src='logo.png' alt='Elegant model' />
					<h1>Elegant Redux</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart (0)</button>
					<button onClick={isShowNonCart}> Show Non-Cart </button>
				</p>
			</header>
		</>
	)
}
