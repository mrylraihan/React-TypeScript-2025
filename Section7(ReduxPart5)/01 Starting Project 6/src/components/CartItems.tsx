import { type CartItem, addToCart, removeFromCart } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";
type ItemType = {
	id: string
	price: number
	quantity: number
	title: string
}
export default function CartItems() {
  const cartItems = useCartSelector(state=>state.cart.items)
  const dispatch = useCartDispatch()
  const totalPrice = cartItems.reduce((value, item)=>value + item.quantity * item.price,0)
  const formattedTotalPrice = totalPrice.toFixed(2)

  const handleAddToCart = (item: CartItem) => {
		console.log(item)
    dispatch(addToCart(item));
	}

  const handleRemoveFromCart = (id:string)=>{
    console.log(id)
    dispatch(removeFromCart(id))
  }
  return (
		<div id='cart'>
			{cartItems.length === 0 && <p>No items in cart!</p>}

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

			<p id="cart-total-price">
        Cart Total: <strong>$ {formattedTotalPrice}</strong>
      </p>
		</div>
	)
}
