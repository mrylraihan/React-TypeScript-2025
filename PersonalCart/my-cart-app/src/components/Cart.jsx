import React from 'react'

function Cart({ cart, removeFromCart }) {
	console.log(cart)
	return (
		<div>
			{cart.map((item) => {
				return (
					<div>
						<div className='card'>
							<div className='card-content'>
								<h3 className='card-name'>{item.name}</h3>
								<div className='card-footer'>
									<span className='card-price'>${item.price}</span>
									<span className='card-price'>X{item.quantity}</span>
									<button className='card-button' onClick={removeFromCart.bind(this,item.id)}>Remove to Cart</button>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Cart
