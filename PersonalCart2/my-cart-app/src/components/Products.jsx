import React from 'react'
import Card from './Card'

function Products({ products, addToCart }) {
	return (
		<div className='card-container'>
			<h1>Products List</h1>
			<div>
				{products.map((product) => {
					return (
						<div key={product.title}>
							<Card {...product} addToCart={addToCart} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Products
