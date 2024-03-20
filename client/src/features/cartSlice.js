import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart:(state, action) =>{
            state.items.push(action.payload);
        }
    }
});

// Exporting individual reducer or action method which is used to update the store
export const {addItemToCart} = cartSlice.actions;

// It will be used by store to identify the reducers(Slice in terms of redux toolkit)
export default cartSlice.reducer;



