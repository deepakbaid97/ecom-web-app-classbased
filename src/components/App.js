//import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductPage from "../pages/ProductPage";
import NavBar from "./navbar/navBar";
import CartPage from "../pages/CartPage";

function App ()  {
    return(
        <div>
            
            <Router>
                <NavBar/>
                <Route path="/products" component={ProductPage}/>
                <Route path="/cart" component={CartPage}/>
            </Router>
            
        </div>
    );
}


export default App;