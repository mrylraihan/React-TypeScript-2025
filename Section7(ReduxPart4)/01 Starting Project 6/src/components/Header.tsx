import { useState } from 'react';

import Cart from './Cart.tsx';
import { useSelector } from 'react-redux';
import { useCartSelector } from '../store/hooks.ts';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const fullstate = useCartSelector(state=>state)
  const items = fullstate.cart.items
  console.log(items)
  console.log(fullstate)

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
					<button onClick={handleOpenCartClick}>Cart {items.length} </button>
				</p>
			</header>
		</>
	)
}
