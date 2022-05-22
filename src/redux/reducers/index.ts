import { configureStore } from "@reduxjs/toolkit"

const formReducer = 

const reducer = {
    form: formReducer
}

const preloadedState = {
    form: {}
}

const store = configureStore({
    reducer,
    preloadedState,
})