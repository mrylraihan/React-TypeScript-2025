import React from 'react'
import Card from './Card'

function Cart({ cart, removeFromCart }) {
	return (
		<div>
			<h1>Cart List</h1>
			<div className='card-container'>
				{cart.map((item) => {
					return (
						<div key={item.title}>
							<Card {...item} removeFromCart={removeFromCart} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Cart
