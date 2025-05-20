import { useState } from 'react';

import Cart from './Cart.tsx';
import { useSelector } from 'react-redux';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const state = useSelector(state=>state)
  console.log(state)

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }
 
  return (
		<>
			{cartIsVisible && <Cart onClose={handleCloseCartClick} />}
			<header id='main-header'>
				<div id='main-title'>
					<img src='logo.png' alt='Elegant model' />
					<h1>Elegant Redux</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart (0)</button>
				</p>
			</header>
		</>
	)
}
