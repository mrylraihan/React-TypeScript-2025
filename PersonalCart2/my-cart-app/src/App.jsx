
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
const DUMMY_PRODUCTS = [
{
  "price": 100,
  "id": 1,
  "title": "quidem molestiae enim"
},
{
  "price": 10,
  "id": 2,
  "title": "sunt qui excepturi placeat culpa"
},
{
  "price": 200,
  "id": 3,
  "title": "omnis laborum odio"
},
{
  "price": 220,
  "id": 4,
  "title": "non esse culpa molestiae omnis sed optio"
},
{
  "price": 15,
  "id": 5,
  "title": "eaque aut omnis a"
},
{
  "price": 45,
  "id": 6,
  "title": "natus impedit quibusdam illo est"
},
{
  "price": 10,
  "id": 7,
  "title": "quibusdam autem aliquid et et quia"
},
{
  "price": 11,
  "id": 8,
  "title": "qui fuga est a eum"
},
{
  "price": 186,
  "id": 9,
  "title": "saepe unde necessitatibus rem"
},
{
  "price": 199,
  "id": 10,
  "title": "distinctio laborum qui"
}
]
function App() {
  const [cart, setCart] = useState([])
  console.log("cart",cart)
  console.log("products", DUMMY_PRODUCTS)

  const addToCart = (product)=>{
    const itemIsFound = cart.find(ele=>ele.id==product.id)
   console.log(itemIsFound)
   if(!itemIsFound){
    // add to cart
    setCart(prev=>{
      return [...prev, {...product, quantity: 1}]
    })
   }else{
    setCart(prev=>{
      return prev.map(ele=>{
        // if (ele.id === itemIsFound.id){
        //   ele.quantity = ele.quantity + 1
        // }
        // return ele
        return ele.id === itemIsFound.id ? {...ele, quantity:ele.quantity+1}:ele
      })
    })
   }
  }

  const removeFromCart = (id)=>{
    const itemIsFound = cart.find((ele) => ele.id == id)
    console.log(itemIsFound)
    if(itemIsFound.quantity>1){
      setCart(prev=>{
        return prev.map((ele) => {
					return ele.id === itemIsFound.id
						? { ...ele, quantity: ele.quantity - 1 }
						: ele
				})
      })
    }else{
      setCart(prev=>{
        return prev.filter(ele=>ele.id!==id)
      })
    }
  }
  return (
		<>
			<Products products={DUMMY_PRODUCTS} addToCart={addToCart} />
			<hr />
			<Cart cart={cart} removeFromCart={removeFromCart} />
		</>
	)
}

export default App
