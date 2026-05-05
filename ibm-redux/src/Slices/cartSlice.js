import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            if (state.cart.find((item) => item.name == action.payload.name)){

                    const index = state.cart.findIndex(item => item.name === action.payload.name)
                    state.cart[index].quantity = state.cart[index].quantity + 1
                  
            
            }
            else{
                var plant = {name:action.payload.name,image:action.payload.image,cost: action.payload.cost,quantity :  1 }
                console.log( "New plants added" + {plant} )
                state.cart.push(plant)

            }
            return
        },
        removeToCart:(state,action)=>{
            
            state.cart = state.cart.filter(item => item.name !== action.payload.name)                  
            console.log("deleted")

        },
        incrementByOne:(state,action)=>{
            
            const index = state.cart.findIndex(item => item.name === action.payload.name)
            state.cart[index].quantity = state.cart[index].quantity + 1
            console.log("added 1")

        },decrementByOne:(state,action)=>{
            
            const index = state.cart.findIndex(item => item.name === action.payload.name)
            state.cart[index].quantity = state.cart[index].quantity - 1
            if (state.cart[index].quantity == 0){
                state.cart = state.cart.filter(item => item.name !== action.payload.name) 
            }

        },
        


    }

})


export const {addToCart,removeToCart,incrementByOne,decrementByOne} = cartSlice.actions
export default cartSlice.reducer