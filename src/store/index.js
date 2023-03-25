// import { ConfigureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import listSlise from "./listSlice"
const store = configureStore({
    reducer:{
        listSlise:listSlise
    }
})

export default store;