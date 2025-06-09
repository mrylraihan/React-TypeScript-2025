import { useSelector } from "react-redux";
import { useCartDispatch, useCartSelector } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/cart-slice";

type Product = {
  id: string;
  title: string;
  price: number;
}

export default function CartItems() {
	const cartItems = useCartSelector((state) => state.cart.items)
  const formattedTotalPrice = useCartSelector((state) =>
		state.cart.items.reduce((val, item) => {
			const total = item.price * item.quantity
			return val + total
		}, 0).toFixed(2)
	)
   const dispatch = useCartDispatch()
    function handleAddToCart(item: Product) {
			dispatch(addToCart({ id: item.id, title: item.title, price: item.price }))
		}
    function handleRemoveFromCart(id:string){
      dispatch(removeFromCart(id))
    }
    // removeFromCart
	// console.log(cartItems)
	return (
		<div id='cart'>
			<p>No items in cart!</p>

			<ul id='cart-items'>
				{cartItems.map((item) => {
					const formattedPrice = `$${item.price.toFixed(2)}`

					return (
						<li key={item.id}>
							<div>
								<span>{item.title}</span>
								<span> ({formattedPrice})</span>
							</div>
							<div className='cart-item-actions'>
								<button onClick={() => handleRemoveFromCart(item.id)}>-</button>
								<span>{item.quantity}</span>
								<button onClick={() => handleAddToCart(item)}>+</button>
							</div>
						</li>
					)
				})}
			</ul>

			<p id='cart-total-price'>
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		</div>
	)
}
