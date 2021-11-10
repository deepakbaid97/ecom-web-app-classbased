import React, { useEffect, useContext } from 'react';

import { Button, Card, Container, Grid, Icon, Label, Menu, Segment, Sidebar, Image } from 'semantic-ui-react';
import { CartItemIdContext, ProductItemContext } from '../components/App';

import ProductList from '../components/productList';

const CartItemSide = (props) => {
     console.log(props);

    return (<Card>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src = {props.product.image}
      />
      <Card.Header>{props.product.title}</Card.Header>
      <Card.Meta>{props.product.price}</Card.Meta>
    </Card.Content>
  </Card>);
}

const ProductPage = () => {
    const [visible, setVisible] = React.useState(false);
    const [cartProducts, setCartProduct] = React.useState([]);
    const cartItemIdContext = useContext(CartItemIdContext);
    const productItemContext = useContext(ProductItemContext);
    const [cart, setCart] = React.useState(cartItemIdContext.CartItemIdState);
    

    const abch = (value) => {
        console.log(value);
        const newCartProducts = [];
        console.log(cart, "cart");
        value.CartItemIdState.forEach(id => {
            
            // console.log(id, " id", productItemContext.ProductState[id-1], "product Details as id");
            newCartProducts.push( productItemContext.ProductState[id-1]);
            console.log(cartProducts, "from Cart Products");
        });
        return newCartProducts;
        //console.log(cartProducts, "useEffect product");
    };

    const cartItemList = (value) =>{
        
        return abch(value).map(data => {
            //console.log(data, "data");
            if(data === undefined) return;
            console.log(data.id, "data");
            return <CartItemSide key={data.id} product={data} />
        })
    }

    //setTimeout(()=> setCart([1,2,3]), 10000);
        return(
            
            <div>
                <Container >
                    <Grid columns={1}>
                        <Grid.Column>
                                <Button color="orange" onClick={() => setVisible(prevVisiblity => prevVisiblity? false: true)}>
                                <Icon name="cart" /> Cart &emsp;
                                {/* <Label color="teal">{this.state.cartItem.length}</Label> */}
                                </Button>  
                        </Grid.Column>

                        <Grid.Column>
                            <Sidebar.Pushable as={Segment}>
                                <Sidebar
                                    as={Card}
                                    animation='overlay'
                                    icon='labeled'
                                    inverted="true"
                                    onHide={() => setVisible(false)}
                                    vertical="true"
                                    visible={visible}
                                    width='thin'
                                >
                                    <CartItemIdContext.Consumer>
                                        {(value) => cartItemList(value)}
                                    </CartItemIdContext.Consumer>
                                </Sidebar> 
                                <Sidebar.Pusher>
                                    <Segment basic>
                                        <ProductList/>
                                    </Segment>
                                </Sidebar.Pusher> 
                            </Sidebar.Pushable>
                        </Grid.Column>
                    </Grid>

                </Container>
            </div>
        );
    }


export default ProductPage;