
import { useState } from 'react'
import './App.css'
import Items from './components/Items'
import Cart from './components/Cart'
const ProductsArr = [
  {name:"Vomero 5", id:1005, price:160},
  {name:"Vomero 18", id:1018, price:150},
  {name:"Vomero Roam", id:2000, price:180},
]
function App() {
  const [cart, setCart] = useState([])
  const [products] = useState(ProductsArr)

  console.log("cart",cart)
  console.log("products", products)
  const addToCart = (id, name, price)=>{
    // const isFound = cart.findIndex(item=>item.id == id)
    //  setCart(prev=>{
      const isFound = cart.find(ele=>ele.id==id)
      console.log("isFound", isFound)
    if(!isFound){
      setCart(prev=>{return [...prev, {id, name, price, quantity:1}]})
    }else{
      setCart(prev=>{return prev.map(ele=>ele.id!==id?ele:{...ele, quantity:ele.quantity+1})})
    }
  //  })
  //  setCart(prev=>{
  //   const isFound = prev.find(ele=>ele.id==id)
  //   if(!isFound){
  //     return [...prev, {id, name, price, quantity:1}]
  //   }else{
  //     return prev.map(ele=>ele.id!==id?ele:{...ele, quantity:ele.quantity+1})
  //   }
  //  })
  }
  const removeFromCart = (id) => {
		const isFound = cart.find((item) => item.id == id)
		console.log('isFound', isFound)
		setCart((prev) => {
      if(isFound.quantity!==1){
				return prev.map((ele) =>
					ele.id !== id ? ele : { ...ele, quantity: ele.quantity - 1 }
				)
      }else{
        return prev.filter(ele=>ele.id!==id)
      }
		})
	}

  return (
		<>
			<h1>Store</h1>
			{products.map((product) => (
				<Items key={product.id} {...product} addToCart={addToCart} />
			))}
			<h1>cart</h1>
			<Cart cart={cart} removeFromCart={removeFromCart} />
		</>
	)
}

export default App
