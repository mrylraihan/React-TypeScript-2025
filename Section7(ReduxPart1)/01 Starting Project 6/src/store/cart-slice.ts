import {createSlice , type PayloadAction} from '@reduxjs/toolkit'

type CartItem = {
    id:string,
    title:string,
    price:number,
    quantity:number
}

type CartState = {
	items: CartItem[]
}

const initialState:CartState = {
    items:[]
}
export const cartSlice = createSlice({
	name: 'Cart',
	initialState: initialState,
	reducers: {
		addToCart(state: CartState, action: PayloadAction<{id: string; title:string; price:number}>) {},
		removeFromCart() {},
	},
})