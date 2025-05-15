import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products : [],
    UserInfo : null
}

export const appSlice = createSlice({



      name : "Ecommerce",

      initialState,


      reducers : {


        addToCart : (state , action) => {
            const item = state.products.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
        },


        increament : (state , action) => {
            const item = state.products.find((item) => item.id === action.payload) 
             item.quantity++
        } ,


        decreament : (state , action) => {
            const item = state.products.find((item) => item.id === action.payload) 
             if (item.quantity === 1){
                  item.quantity=1
             } else {
                item.quantity--
             }
        } ,

        clear : (state) => {
            state.products=[]
        } ,

        
        remove: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        },


        setUser : (state , action) => {
            state.UserInfo = action.payload
        },

        LogOut:(state) => {
            state.UserInfo =null
        }
      }
})

export const {addToCart , increament ,decreament,clear ,remove , setUser ,LogOut} = appSlice.actions
export default appSlice.reducer