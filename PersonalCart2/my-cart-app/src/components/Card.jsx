import React from 'react'

function Card({ title, price, id, addToCart, quantity, removeFromCart}) {
	// console.log({ title, price, id })
	const addItemToCart = () => {
		const product = { title, price, id }
		addToCart(product)
	}
	return (
		<div className='card'>
			<div className='card-content'>
				<h3 className='card-title'>{title}</h3>
				<p className='card-description'>{price}</p>
				{quantity && <p className='card-description'>X{quantity}</p>}
				{!quantity && <button onClick={addItemToCart}>Add to Cart</button>}
				{removeFromCart && (
					<button onClick={removeFromCart.bind(this, id)}>Remove from Cart</button>
				)}
			</div>
		</div>
	)
}

export default Card
