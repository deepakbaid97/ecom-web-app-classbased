import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Product from './product';
import { Card } from 'semantic-ui-react';
import { ProductItemContext } from './App';

// class ProductList extends React.Component{
    
//     constructor(props){
//         super(props);

//         this.state = {
//             product: [],
//             cartItem: [],
//         }
//     }

//     componentDidMount(){

//         axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
//             .then(data => {
//                 console.log(data.data);
//                 const proData = data.data;

//                 this.setState({
//                 product: proData
//                 });
//             });
//     }

//     addtoCart = (id) => {
//         console.log(id, "product ID from addtoCart");
//         let items = this.state.cartItem;
//         items.push(id);
//         this.setState({cartItem: items});
//         console.log(this.state.cartItem);

//         //saving to localdisk
//         localStorage.setItem("cart", JSON.stringify(items));
//     }



//     render(){
//         return(
//             <Card.Group itemsPerRow="4">
//             {/* <Product product={this.state.product}/> */}
//             {/* <Product key={this.state.product[0]} product={this.state.product}/> */}
//             {this.productComponentList()}
//         </ Card.Group>
//         );
//     }
// }



const ProductList = () => {
    const [product, setProduct] = React.useState([]);
    //const [cartItem, setCartItem] = React.useState([]);
    const productItemContext = useContext(ProductItemContext);


    const productComponentList = () => {
        return product.map(data => {
            return <Product key={data.id} product={data}/>
        })
    }

    // const addtoCart = (id) => {
    //     console.log(id, "product ID from addtoCart");
    //     let items = cartItem;
    //     items.push(id);
    //     setCartItem(items);
    //     console.log(cartItem);

    //     //saving to localdisk
    //     localStorage.setItem("cart", JSON.stringify(items));
    // }

    useEffect(() => {
        console.log(productItemContext.ProductState, " from context API");
        setProduct(productItemContext.ProductState);
    }, [productItemContext.ProductState])

    return(
        <Card.Group itemsPerRow="4">
        {/* <Product product={this.state.product}/> */}
        {/* <Product key={this.state.product[0]} product={this.state.product}/> */}
        {productComponentList()}
    </ Card.Group>
    );
    
}

export default ProductList;