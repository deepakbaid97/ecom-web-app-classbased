import React, { useContext } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { CartItemIdContext } from './App';


function Product (props) {
  const cartItemIdContext = useContext(CartItemIdContext);
  console.log(cartItemIdContext.CartItemIdState);

  return (
    <Card>
    <Image src={props.product.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.product.title}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        {props.product.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='dollar sign' />
        {props.product.price}
      </a>
      &emsp;
      <Button onClick={() => {
        console.log(cartItemIdContext.CartItemIdState);
        cartItemIdContext.CartItemIdDispatch({type: 'ADD_ITEM_ID', id: `${props.product.id}`})}
        }>
          <Icon name='cart' />
          Add to Cart
      </Button>
    </Card.Content>
  </Card>
  );
}

    // <>
    // {console.log(props, "HElow")}
    // {console.log(props.product.category), "title"}
    // </>
 

export default React.memo(Product);