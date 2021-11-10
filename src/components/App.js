//import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useContext, useEffect, useReducer } from "react";

import ProductPage from "../pages/ProductPage";
import NavBar from "./navbar/navBar";
import CartPage from "../pages/CartPage";
import axios from "axios";

export const CartItemIdContext = React.createContext();
export const ProductItemContext = React.createContext();

const initialCartItemIdState = [];
const initialProductItemState = [];

const cartItemIdReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM_ID':
            const x = [...state, Number(action.id)];
            //state.push(Number(action.id));
            //console.log(state);
            return x;
        
        case 'REMOVE_ITEM_ID':
            const index = state.indexOf(action.id);
            state.splice(index, 1);
            return state;
        
        default: return state;
    }
}

const productReducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS': 
            state=[];
            action.payload.forEach(data => state.push(data));
            
            return state;
    }
}

function App ()  {
    const [CartItemId, dispatch] = useReducer(cartItemIdReducer, initialCartItemIdState);
    const [Products, productDispatch] = useReducer(productReducer ,initialProductItemState);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res => {
                productDispatch({type: 'FETCH_SUCCESS', payload: res.data,})
            })
    }, [])

    return(
        <div>
            <ProductItemContext.Provider
                    value={{ProductState: Products, ProductDispatch: productDispatch}}
                    >
            <CartItemIdContext.Provider
                value={{CartItemIdState: CartItemId, CartItemIdDispatch: dispatch}}
            >
                    <Router>
                        <NavBar/>
                        <Route path="/products" component={ProductPage}/>
                        <Route path="/cart" component={CartPage}/>
                    </Router>
                
            </CartItemIdContext.Provider>
            </ProductItemContext.Provider>
        </div>
    );
}


export default App;