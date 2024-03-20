import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import todoSlice from './features/todoSlice';

const store = configureStore({
    reducer:{
        cartSlice: cartSlice,
        todoSlice: todoSlice
    }
});

export default store;