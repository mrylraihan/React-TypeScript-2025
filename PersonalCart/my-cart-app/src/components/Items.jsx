import React from 'react'

function Items({ name, price, id, addToCart }) {
	// console.log(id)

	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h3 className='card-name'>{name}</h3>
					<div className='card-footer'>
						<span className='card-price'>${price}</span>
						<button className='card-button' onClick={addToCart.bind(this, id, name, price)}>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Items
