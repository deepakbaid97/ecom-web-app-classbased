import React from 'react';
import axios from 'axios';
import { Button, Card, Container, Icon, Label } from 'semantic-ui-react';
import Product from '../components/product';
import { Link } from 'react-router-dom';


class ProductPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            product: [],
            cartItem: []
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(data => {
                console.log(data.data);
                const proData = data.data;

                this.setState({
                product: proData
                });
            });
    }

    addtoCart = (id) => {
        console.log(id, "product ID from addtoCart");
        let items = this.state.cartItem;
        items.push(id);
        this.setState({cartItem: items});
        console.log(this.state.cartItem);

        //saving to localdisk
        localStorage.setItem("cart", JSON.stringify(items));
    }

    productComponentList(){
        return this.state.product.map(data => {
            return <Product key={data.id} product={data} addtoCart={this.addtoCart}/>
        })
    }

    render(){
        return(
            <div>
                <Container >
                    <Link to="/cart">
                        <Button color="orange">
                        <Icon name="cart" /> Cart &emsp;
                        <Label color="teal">{this.state.cartItem.length}</Label>
                        </Button>  
                    </Link>

                <br/>
                <br/>
                <Card.Group itemsPerRow="4">
                {/* <Product product={this.state.product}/> */}
                {/* <Product key={this.state.product[0]} product={this.state.product}/> */}
                {this.productComponentList()}
                </ Card.Group>
                </Container>
                
            </div>
        );
    }
}

export default ProductPage;